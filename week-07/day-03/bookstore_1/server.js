'use strict';

require('dotenv').config();

const express = require('express'),
  mysql = require('mysql'),
  path = require('path'),
  app = express(),
  PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname, './index.html');
});

app.get('/api', (req, res) => {
  let sql = 'SELECT book_name FROM book_mast';

  conn.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };

    res.json({
      booknames: rows,
    })
  })
})


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
