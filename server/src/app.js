import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import database from './config/database';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './swagger.json';

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
app.use(morgan('dev'));
app.use(express.json());
app.use(
  '/api/docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsdoc(swaggerOptions), { explorer: true })
);

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
