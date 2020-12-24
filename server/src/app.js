import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import database from './config/database';

// routes
import UsersRoutes from './routes/users.routes';
import AuthenticationRoutes from './routes/authentication.routes';
import ProjectRoutes from './routes/projects.routes';
import TaskRoutes from './routes/tasks.routes';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/users', UsersRoutes());
app.use('/api/authentication', AuthenticationRoutes());
app.use('/api/projects', ProjectRoutes());
app.use('/api/tasks', TaskRoutes());

// error handler
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({ type: 'fail', error: error.toString() });
});

export default app;
