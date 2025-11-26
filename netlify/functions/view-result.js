import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'jeopardy';
const COLLECTION = process.env.MONGODB_COLLECTION || 'results';

let cachedClient = null;
let cachedDb = null;

async function getDb() {
  if (cachedDb) return cachedDb;
  if (!MONGODB_URI) throw new Error('Missing MONGODB_URI environment variable');
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedClient = client;
  cachedDb = client.db(MONGODB_DB);
  return cachedDb;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handler(event, context) {
  // preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  try {
    const params = event.queryStringParameters || {};
    const sessionId = params.sessionId || (event.body && JSON.parse(event.body || '{}').sessionId);

    if (!sessionId) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ status: 'error', message: 'Missing sessionId (query param or body)' }),
      };
    }

    const db = await getDb();
    // find all results for the sessionId
    const cursor = db.collection(COLLECTION).find({ sessionId: String(sessionId) }).sort({ timestamp: 1 });
    const items = await cursor.toArray();

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ status: 'success', results: items }),
    };
  } catch (err) {
    console.error('view-result error:', err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ status: 'error', message: err.message }),
    };
  }
}
