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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.get('/hello', (req, res) => {
  res.send('Hello World! :3');
});

app.get('/posts', (req, res){
  
});


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
