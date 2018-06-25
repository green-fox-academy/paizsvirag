'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/greet/:message/', (req, res) => {
  let name = 'Fox';
  if (req.query.name) {
    name = req.query.name;
  };
  res.send(`${req.params.message}, ${req.query.name}`);
});

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
