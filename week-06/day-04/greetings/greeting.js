'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = 'Guest';
  if (req.query.name) {
    name = req.query.name;
  }
  res.render('home', {
    title: `Welcome back, ${name}!`
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
