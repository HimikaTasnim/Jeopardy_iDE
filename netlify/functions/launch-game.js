export async function handler(event, context) {
  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  // Main function logic
  const sessionId = String(Date.now());
  const GAME_URL = process.env.GAME_URL || 'https://dancing-lokum-f952d8.netlify.app/index.html';

  // append sessionId as a query param (preserve existing query string if any)
  let url = GAME_URL;
  try {
    const u = new URL(GAME_URL);
    u.searchParams.set('sessionId', sessionId);
    url = u.toString();
  } catch (e) {
    // fallback: simple append
    url = GAME_URL + (GAME_URL.includes('?') ? '&' : '?') + 'sessionId=' + encodeURIComponent(sessionId);
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({
      gameUrl: url,
      sessionId,
    }),
  };
}
