import express from 'express';
import dotenv from 'dotenv';

// routes
import usersRoutes from './routes/users';

// load env variables
dotenv.config();

// create an express application
const app = express();

// routes
app.use('/api/users', usersRoutes());

export default app;
