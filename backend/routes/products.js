const express = require('express');
const router = express.Router();
const pool = require('../models/db');

router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM products');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

  router.post('/', async (req, res) => {
    const { name, price } = req.body;
    try {
      const result = await pool.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
  
  module.exports = router;