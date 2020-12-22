import express from 'express';
import dotenv from 'dotenv';

// load env variables
dotenv.config();

// create an express application
const app = express();

app.use('/', (req, res) => {
  res.send('Hello world!');
});

export default app;
