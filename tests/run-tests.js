const axios = require('axios');
const assert = require('assert');

// Configuration
const BASE = process.env.BASE_URL || 'http://localhost:8888/.netlify/functions';
const TIMEOUT = 7000;

async function testLaunchGame() {
  console.log('1) Testing launch-game...');
  const url = `${BASE}/launch-game`;
  const res = await axios.get(url, { timeout: TIMEOUT });
  assert.strictEqual(res.status, 200, 'launch-game did not return 200');
  const data = res.data;
  assert.ok(data.gameUrl, 'launch-game missing gameUrl');
  assert.ok(data.sessionId !== undefined && data.sessionId !== null, 'launch-game missing sessionId');
  console.log('  -> OK (gameUrl and sessionId present)');
  return String(data.sessionId);
}

async function testSubmitAndView(sessionId) {
  console.log('2) Testing submit-result (POST) ...');
  const submitUrl = `${BASE}/submit-result`;
  const payload = {
    sessionId: sessionId,
    playerName: 'test-runner',
    score: 1234,
    metadata: { note: 'automated test' }
  };

  const res = await axios.post(submitUrl, payload, { timeout: TIMEOUT, headers: { 'Content-Type': 'application/json' } });
  assert.strictEqual(res.status, 200, 'submit-result did not return 200');
  assert.ok(res.data && (res.data.insertedId || res.data.status === 'success'), 'submit-result response unexpected');
  console.log('  -> OK (submit-result returned success)');

  console.log('3) Testing view-result (GET) ...');
  const viewUrl = `${BASE}/view-result?sessionId=${encodeURIComponent(sessionId)}`;
  const viewRes = await axios.get(viewUrl, { timeout: TIMEOUT });
  assert.strictEqual(viewRes.status, 200, 'view-result did not return 200');
  assert.ok(viewRes.data && Array.isArray(viewRes.data.results), 'view-result missing results array');

  const found = viewRes.data.results.some(r => String(r.sessionId) === String(sessionId) && r.playerName === payload.playerName && Number(r.score) === Number(payload.score));
  assert.ok(found, 'Submitted result not found in view-result response');
  console.log('  -> OK (submitted result found in results)');
}

(async () => {
  try {
    console.log('Using base URL:', BASE);
    const sessionId = await testLaunchGame();
    await testSubmitAndView(sessionId);
    console.log('\nALL API TESTS PASSED');
    process.exit(0);
  } catch (err) {
    console.error('\nAPI TESTS FAILED:', err.message || err);
    if (err.response) {
      console.error('Response status:', err.response.status);
      console.error('Response data:', err.response.data);
    }
    process.exit(1);
  }
})();
