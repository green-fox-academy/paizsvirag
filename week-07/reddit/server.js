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

app.use('/static', express.static('static'));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.get('/hello', (req, res) => {
  res.send('Hello World! :3');
});

app.get('/posts', (req, res) => {
  let sql = 'SELECT * from posts;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      res.json({
        posts: rows
      });
    }
  });
});

app.post('/posts', (req, res) => {
    let sql = `INSERT INTO posts (title, url, timestamp, score) VALUES ("${req.body.title}", "${req.body.url}", unix_timestamp(), "0");`;
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      sql = `SELECT * FROM posts WHERE id = ${rows.insertId};`
      conn.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        }
        res.json({
          rows
        });
      });
    });
  });

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
