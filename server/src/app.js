import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import database from './config/database';

// routes
import UsersRoutes from './routes/users';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares
app.use(morgan('dev'));

// routes
app.use('/api/users', UsersRoutes());

export default app;
