const express = require('express');

// create an express application
const app = express();

app.use('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;
