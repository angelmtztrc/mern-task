import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import database from './config/database';

// routes
import UsersRoutes from './routes/users.routes';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/users', UsersRoutes());

// error handler
app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;

  return res.status(error.statusCode).json({ type: 'fail', error: error.toString() });
});

export default app;
