'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      received: +req.query.input,
      result: req.query.input * 2,
    })
  } else {
    res.json({
      error: "Please provide an input!",
    })
  }
})

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  } else if (req.query.name) {
    res.json({
      error: "Please provide a title!",
    })
  }
  else {
    res.json({
      error: "Please provide a name!",
    })
  }
})

app.get('/appenda/:appendable', (req, res) => {
  res.json({
    appended: req.params.appendable + "a",
  })
});

function sum(number) {
  let temp = 0;
  for (let i = 0; i <= number; i++) {
    temp += i;
  }
  return temp;
}

function factorio(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorio(number - 1);
  };
};

app.post('/dountil/:what', (req, res) => {
  if (req.params.what === 'sum') {
    res.json({
      result: sum(req.body.until),
    })
  } else if (req.params.what === 'factor') {
    res.json({
      result: factorio(req.body.until),
    })
  }
})

app.listen(PORT, () => {
  console.log(`Listen to ${PORT}.`);
});
