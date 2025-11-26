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
  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: '',
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    if (!data || !data.sessionId) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ status: 'error', message: 'Missing sessionId in request body' }),
      };
    }

    // Persist to MongoDB
    try {
      const db = await getDb();
      const doc = {
        sessionId: String(data.sessionId),
        playerName: data.playerName || null,
        score: typeof data.score === 'number' ? data.score : Number(data.score) || 0,
        metadata: data.metadata || null,
        timestamp: new Date(),
      };
      const result = await db.collection(COLLECTION).insertOne(doc);

      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ status: 'success', insertedId: result.insertedId }),
      };
    } catch (dbErr) {
      console.error('DB error:', dbErr);
      return {
        statusCode: 500,
        headers: CORS_HEADERS,
        body: JSON.stringify({ status: 'error', message: 'Database error: ' + dbErr.message }),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ status: 'error', message: err.message }),
    };
  }
}
