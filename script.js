const categories = [
    "Market Systems & Livelihood Goals",
    "Stakeholder & Ecosystem Mapping", 
    "Market Enablers & Service Delivery",
    "Value Chain Analysis & Product Development",
    "Systemic Change & Impact Measurement",
    "Business Development & Entrepreneurial Thinking",
    "Developing Market Linkages & Inclusive Value Chains",
    "Monitoring & Adaptive Management"
];

import questions from './questionData.js';

let currentIndex = null;
let score = 0;
let answerSubmitted = false;

// serialization guards for opening questions
let isTransitioning = false;
const _openQueue = [];
let _openProcessing = false;

// DOM elements
const board = document.getElementById("game-board");
const questionScreen = document.getElementById("question-screen");
const questionText = document.getElementById("question-text");
const choicesDiv = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const answerArea = document.getElementById("answer-area");
const revealBtn = document.getElementById("reveal-answer-btn");
const giveAnswerBtn = document.getElementById("give-answer-btn");
const exitBtn = document.getElementById("exit-btn");
const submitAnswerBtn = document.getElementById("submit-answer-btn");
const scoreDiv = document.getElementById("score");

// Session / backend function controls
const endGameBtn = document.getElementById('end-game-btn');
let sessionId = null;
const FN_BASE = '/.netlify/functions';

// Session management functions
function getQueryParam(name) {
    try {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    } catch (e) {
        return null;
    }
}

const qsSession = getQueryParam('sessionId');
if (qsSession) {
    sessionId = String(qsSession);
    try { localStorage.setItem('testSessionId', sessionId); } catch (e) {}
}

window.addEventListener('message', (ev) => {
    try {
        const msg = typeof ev.data === 'string' ? JSON.parse(ev.data) : ev.data;
        if (msg && msg.type === 'session' && msg.sessionId) {
            sessionId = String(msg.sessionId);
            try { localStorage.setItem('testSessionId', sessionId); } catch (e) {}
            const sessionInfo = document.getElementById('session-info');
            if (sessionInfo) sessionInfo.textContent = `Using session from test site: ${sessionId}`;
        }
    } catch (e) {
        // ignore invalid messages
    }
}, false);

async function endGame() {
    function readSessionFromSources() {
        try {
            const params = new URLSearchParams(window.location.search);
            const q = params.get('sessionId');
            if (q) return String(q);
        } catch (e) {}
        
        try {
            if (window.location.hash && window.location.hash.includes('sessionId')) {
                const hash = window.location.hash.replace(/^#/, '');
                const p = new URLSearchParams(hash);
                const h = p.get('sessionId');
                if (h) return String(h);
            }
        } catch (e) {}
        
        try { 
            const s = localStorage.getItem('testSessionId'); 
            if (s) return String(s); 
        } catch (e) {}
        
        return null;
    }

    const picked = readSessionFromSources();
    if (picked) {
        sessionId = picked;
    }

    if (!sessionId) {
        const manual = prompt('No active session in this app. Paste sessionId from test site (or cancel):');
        if (!manual) return;
        sessionId = manual.trim();
    }

    const playerName = prompt('Enter player name (optional):', 'player') || 'player';
    const payload = {
        sessionId: String(sessionId),
        playerName,
        score,
        metadata: { endedAt: Date.now() }
    };

    try {
        endGameBtn.disabled = true;
        const res = await fetch(`${FN_BASE}/submit-result`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        let json = null;
        try {
            const text = await res.text();
            json = text ? JSON.parse(text) : null;
        } catch (e) {
            try { 
                const text = await res.text(); 
                json = { raw: 'Non-JSON response', text }; 
            } catch { 
                json = { raw: 'Non-JSON response' }; 
            }
        }

        if (!res.ok) throw new Error((json && json.message) ? json.message : (json && json.raw) ? JSON.stringify(json) : res.statusText);
        
        endGameBtn.style.display = 'none';
    } catch (err) {
        console.error('submit error', err);
        alert('Failed to submit result: ' + (err.message || err));
    } finally {
        endGameBtn.disabled = false;
    }
}

if (endGameBtn) endGameBtn.addEventListener('click', endGame);

// Modal elements
const modal = document.getElementById("modal");
const modalMsg = document.getElementById("modal-message");
const modalChoices = document.getElementById("modal-choices");
const modalFeedback = document.getElementById("modal-feedback");
const modalExit = document.getElementById("modal-exit");
const modalNext = document.getElementById("modal-next");

function isLastQuestion(index) {
    return questions.every((q, i) => i === index || q.answered);
}

// ✅ Updated helper function with column-first progression logic
function canOpenQuestion(q) {
    const row = q.points / 100;
    const currentCol = categories.indexOf(q.category);
    
    // Rule 1: Must complete ALL previous columns entirely before starting a new column
    for (let col = 0; col < currentCol; col++) {
        const hasUnfinishedInPrevCol = questions.some(
            prev => prev.category === categories[col] && !prev.answered
        );
        if (hasUnfinishedInPrevCol) return false;
    }
    
    // Rule 2: Within current column, must complete questions sequentially (Q1, Q2, Q3, Q4, Q5)
    if (row > 1) {
        const prevRowQ = questions.find(
            prev => prev.category === q.category && prev.points === (row - 1) * 100
        );
        if (prevRowQ && !prevRowQ.answered) return false;
    }
    
    return true;
}

// ✅ Updated function to get the next question in strict column-first, row-second order
function getNextSequentialQuestion() {
    // Outer loop: columns (categories) - complete each column entirely
    for (let col = 0; col < categories.length; col++) {
        // Inner loop: rows (1-5 within each column)
        for (let row = 1; row <= 5; row++) {
            const nextQ = questions.find(q => 
                q.category === categories[col] && 
                q.points === row * 100 && 
                !q.answered
            );
            if (nextQ && canOpenQuestion(nextQ)) {
                return nextQ;
            }
        }
    }
    return null; // No more questions available
}

// ✅ Updated buildBoard with column-first progression
function buildBoard() {
    board.innerHTML = "";
    
    // Add category headers
    categories.forEach(cat => {
        const header = document.createElement("div");
        header.className = "tile header";
        header.innerText = cat;
        board.appendChild(header);
    });

    // Find the next question that should be available
    const nextAvailableQ = getNextSequentialQuestion();
    
    // Build the grid (display still needs row-first for visual layout)
    for (let row = 1; row <= 5; row++) {
        for (let col = 0; col < categories.length; col++) {
            const q = questions.find(q => q.id === `${col}-${row}`);
            if (!q) continue;
            
            const tile = document.createElement("div");
            tile.className = "tile";
            
            if (q.answered) {
                tile.classList.add("disabled");
                if (q.revealed) {
                    tile.innerText = "👁";
                    tile.style.backgroundColor = "#555";
                } else if (q.userAnswer === q.correct) {
                    tile.innerText = "✔";
                    tile.style.backgroundColor = "green";
                } else {
                    tile.innerText = "✖";
                    tile.style.backgroundColor = "red";
                }
            } else if (nextAvailableQ && q.id === nextAvailableQ.id) {
                // This is the next question that should be opened
                tile.innerText = q.points;
                tile.style.backgroundColor = "#4CAF50";
                tile.style.cursor = "pointer";
                tile.onclick = () => {
                    if (isTransitioning) return;
                    openQuestion(questions.indexOf(q));
                };
            } else {
                // Question not yet available
                tile.innerText = q.points;
                tile.classList.add("locked");
                tile.style.backgroundColor = "#333";
                tile.style.color = "#666";
                tile.style.cursor = "not-allowed";
                tile.onclick = () => {
                    alert("⚠️ Complete questions in order: Finish all questions in each column before moving to the next column.");
                };
            }
            
            board.appendChild(tile);
        }
    }
}

// Queue-based opener: ensure only one open runs at a time
function openQuestion(index) {
    _openQueue.push(index);
    processOpenQueue();
}

function processOpenQueue() {
    if (_openProcessing) return;
    _openProcessing = true;
    
    const run = async () => {
        while (_openQueue.length) {
            const index = _openQueue.shift();
            
            if (isTransitioning) continue;
            isTransitioning = true;
            
            try {
                const q = questions[index];
                
                if (!canOpenQuestion(q)) {
                    continue;
                }
                
                currentIndex = index;
                questionText.innerText = q.q;
                feedback.innerText = "";
                answerArea.style.display = "none";
                choicesDiv.innerHTML = "";
                
                q.options.forEach((opt, idx) => {
                    const label = document.createElement("label");
                    const radio = document.createElement("input");
                    radio.type = "radio";
                    radio.name = "answer";
                    radio.value = opt;
                    if (idx === 0) radio.checked = true;
                    label.appendChild(radio);
                    label.appendChild(document.createTextNode(opt));
                    choicesDiv.appendChild(label);
                });
                
                questionScreen.style.display = "flex";
                board.style.display = "none";
                revealBtn.disabled = false;
                giveAnswerBtn.disabled = false;
                exitBtn.disabled = false;
                submitAnswerBtn.disabled = false;
            } finally {
                await new Promise(r => setTimeout(r, 30));
                isTransitioning = false;
            }
        }
        _openProcessing = false;
    };
    
    run();
}

function revealAnswer() {
    const q = questions[currentIndex];
    modalMsg.innerHTML = `<strong>Q:</strong> ${q.q}`;
    modalChoices.style.display = "none";
    modalFeedback.innerHTML = `👁 Correct Answer: ${q.correct}<br><br><strong>Explanation:</strong> ${q.explanation}`;
    q.answered = true;
    q.revealed = true;
    modal.dataset.action = "reveal";
    
    if (isLastQuestion(currentIndex)) {
        modalNext.style.display = "none";
        modalExit.style.display = "inline-block";
    } else {
        modalNext.style.display = "inline-block";
        modalExit.style.display = "inline-block";
        modalNext.innerText = "Next Question";
    }
    
    openModal();
    updateScore(0);
}

function giveAnswer() {
    const q = questions[currentIndex];
    modalMsg.innerHTML = `<strong>Q:</strong> ${q.q}`;
    modalChoices.innerHTML = "";
    modalFeedback.innerText = "";
    answerSubmitted = false;
    modal.dataset.action = "answer";
    
    q.options.forEach(opt => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "modal-answer";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        modalChoices.appendChild(label);
        modalChoices.appendChild(document.createElement("br"));
    });
    
    modalChoices.style.display = "block";
    modalFeedback.style.display = "block";
    modalNext.style.display = "inline-block";
    modalExit.style.display = isLastQuestion(currentIndex) ? "none" : "inline-block";
    modalNext.innerText = "Submit Answer";
    openModal();
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    modalFeedback.innerText = "";
    modalChoices.innerHTML = "";
    delete modal.dataset.action;
}

function updateScore(pointsToAdd) {
    score += pointsToAdd;
    scoreDiv.innerText = `Score: ${score}`;
}

// ✅ Updated continueToNextQuestion with column-first logic
function continueToNextQuestion() {
    const nextQ = getNextSequentialQuestion();
    
    if (nextQ) {
        const nextIndex = questions.indexOf(nextQ);
        openQuestion(nextIndex);
    } else {
        alert("🎉 All questions completed!");
        exitToBoard();
    }
}

function exitToBoard() {
    questionScreen.style.display = "none";
    board.style.display = "grid";
    buildBoard();
}

// Modal next button handler
modalNext.onclick = () => {
    const q = questions[currentIndex];
    const action = modal.dataset.action;
    
    if (action === "answer" && !answerSubmitted) {
        const selected = document.querySelector('input[name="modal-answer"]:checked');
        if (!selected) {
            modalFeedback.innerText = "⚠️ Please select an answer!";
            return;
        }
        
        const isCorrect = selected.value === q.correct;
        q.userAnswer = selected.value;
        
        if (isCorrect) {
            modalFeedback.innerHTML = `✅ Correct!<br><br><strong>Explanation:</strong> ${q.explanation}`;
            updateScore(q.points);
        } else {
            modalFeedback.innerHTML = `❌ Incorrect.<br>Correct Answer: ${q.correct}<br><br><strong>Explanation:</strong> ${q.explanation}`;
        }
        
        q.answered = true;
        answerSubmitted = true;
        modalChoices.style.display = "none";
        modalNext.innerText = isLastQuestion(currentIndex) ? "Exit" : "Next Question";
        modalExit.style.display = "inline-block";
    } else {
        closeModal();
        isLastQuestion(currentIndex) ? exitToBoard() : continueToNextQuestion();
    }
};

// Event listeners
revealBtn.addEventListener("click", revealAnswer);
giveAnswerBtn.addEventListener("click", giveAnswer);
submitAnswerBtn.addEventListener("click", () => {});
exitBtn.addEventListener("click", exitToBoard);
modalExit.addEventListener("click", () => {
    closeModal();
    exitToBoard();
});

// Initialize the game board
buildBoard();