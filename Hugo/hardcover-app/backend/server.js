const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const HARDCOVER_API = 'https://api.hardcover.app/v1/graphql';
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXJkY292ZXIiLCJ2ZXJzaW9uIjoiOCIsImp0aSI6IjkxZmNiMDhjLTBhMmYtNGFjNi04M2QxLTJkMzU2OTc4YTFmNSIsImFwcGxpY2F0aW9uSWQiOjIsInN1YiI6Ijg0MjgwIiwiYXVkIjoiMSIsImlkIjoiODQyODAiLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNzczNzg0MjQ3LCJleHAiOjE4MDUzMjAyNDcsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIlgtaGFzdXJhLXVzZXItaWQiOiI4NDI4MCJ9LCJ1c2VyIjp7ImlkIjo4NDI4MH19.H30TJKSNPe9gqJRnh2DC5ahyJVcoWsSx4ygZyxI5lFs';

// Dist folder path (relative to backend/)
const DIST = path.join(__dirname, '../frontend/dist/hardcover-frontend/browser');

app.use(express.json());

// ── API proxy ──────────────────────────────────────────────
app.post('/api/graphql', async (req, res) => {
  try {
    const response = await fetch(HARDCOVER_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'authorization': TOKEN },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();

    if (data.errors) {
      console.error('❌ GraphQL errors:', JSON.stringify(data.errors, null, 2));
    } else {
      const keys = Object.keys(data.data || {});
      const topKey = keys[0];
      const first = data.data?.[topKey];
      if (topKey === 'search') {
        try {
          const raw = first?.results;
          const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
          const hit = parsed?.hits?.[0]?.document ?? parsed?.hits?.[0];
          if (hit) console.log(`✅ [search] image:`, JSON.stringify(hit.image));
        } catch {}
      } else if (topKey === 'books') {
        const book = Array.isArray(first) ? first[0] : first;
        if (book) console.log(`✅ [books] image:`, JSON.stringify(book.image));
      }
    }

    res.json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
});

// ── Serve Angular build (production) ─────────────────────
app.use(express.static(DIST));

// All other routes → index.html (Angular router)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅  Server running → http://localhost:${PORT}`);
  console.log(`📁  Serving Angular build from: ${DIST}`);
});
