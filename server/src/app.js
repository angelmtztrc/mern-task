const express = require('express');

// load env variables
require('dotenv').config();

// create an express application
const app = express();

app.use('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;
