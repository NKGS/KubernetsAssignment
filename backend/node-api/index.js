require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

console.log("process.env :: ",process.env)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  max: 5, // connection pool
});

console.log("pool ::")

app.get('/', async (req, res) => {
  try {
    res.json({
      message: 'Welcome to the Node API'
    });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).send('Database error');
  }
});

app.get('/records', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).send('Database error');
  }
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
