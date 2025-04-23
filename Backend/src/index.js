const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 4000;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'mydb'
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`PostgreSQL Connected ✅: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('Database connection failed ❌: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
