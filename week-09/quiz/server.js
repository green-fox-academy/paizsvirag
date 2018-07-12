'use strict';

require('dotenv').config();

const express = require('express'),
  path = require('path'),
  mysql = require('mysql'),
  app = express(),
  PORT = 8080;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(express.static(__dirname));
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

app.get('/game', (req, res) => {
  const questions = `SELECT * FROM questions ORDER BY RAND() LIMIT 1`;
  //let sql = `SELECT * FROM (SELECT id as 'id', question as 'question' FROM questions ORDER BY RAND() LIMIT 1) AS q INNER JOIN (SELECT id as 'id', question_id as 'question_id', answer as 'answer', is_correct as 'is_correct' FROM answers) AS a ON q.id = a.question_id;`
  conn.query(questions, (err, rowsQ) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    const answers = `SELECT * FROM answers WHERE question_id = "${rowsQ[0].id}"`;
    conn.query(answers, (err, rowsA) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      } else {
        res.json({
          id: rowsQ[0].id,
          question: rowsQ[0].question,
          answers: rowsA,
        })
      }
    });
  });
});

app.get('/questions', (req, res) => {
  let sql = 'SELECT * FROM questions;'
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      res.json({
        rows
      });
    };
  });
});


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port.`);
});
