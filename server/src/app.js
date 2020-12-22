import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// routes
import usersRoutes from './routes/users';

// load env variables
dotenv.config();

// create an express application
const app = express();

// middlewares
app.use(morgan('dev'));

// routes
app.use('/api/users', usersRoutes());

export default app;
