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

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
  let sql = `INSERT INTO posts (title, URL, timestamp, score) VALUES ("${req.body.title}", "${req.body.URL}", unix_timestamp(), "0");`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    const insertedID = rows.insertId;
    sql = `INSERT INTO users (username)
    SELECT '${req.body.owner}' WHERE NOT EXISTS (SELECT * FROM users WHERE username='${req.body.owner}');`;
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      sql = `SELECT * FROM posts WHERE ID = ${insertedID};`
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
});

app.put('/posts/:id/upvote', (req, res) => {
  const vote = req.body.vote;
  const id = req.params.id;
  let sql = '';
  if (vote === 1) {
    sql = `SELECT posts SET score = score + 1, vote = "${vote}" WHERE id = ${id}`;
  }
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${id};`
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


app.put('/posts/:id/downvote', (res, req) => {
  const vote = req.body.vote;
  const id = req.params.id;
  let sql = '';
  if (vote === -1) {
    sql = `UPDATE posts SET score = score - 1, vote ="${vote}" WHERE id = ${id};`;
  }
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${id};`
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

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id
  let sql = `SELECT * FROM posts WHERE ID = ${id};`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    };

    const deletedRows = rows;

    sql = `DELETE FROM posts WHERE ID = ${id};`;
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
      res.json({
        deletedRows
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
