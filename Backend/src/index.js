const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 4000;

// Set up the connection pool
const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'mydb',
});

app.get('/api/db-test', async (req, res) => {
  try {
    // Execute a simple query to check the connection
    const result = await pool.query('SELECT NOW()');
    
    // Return the current time from the database
    res.json({ db_time: result.rows[0].now });
  } catch (err) {
    // Log the error to the console
    console.error('❌ DB Connection Test Failed:', err);

    // Respond with a 500 error if the connection failed
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
