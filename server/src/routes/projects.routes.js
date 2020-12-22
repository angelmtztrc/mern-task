import { Router } from 'express';
import { body } from 'express-validator';

// create router
const router = Router();

// middlewares
import checkBody from '../middlewares/checkBody';
import checkToken from '../middlewares/checkToken';

// controllers
import { create, getAll } from '../controllers/project.controller';

export default function ProjectRoutes() {
  // all routes are private
  router.use(checkToken);

  router.post('/', [body('title', 'Title is required').notEmpty(), checkBody], create);
  router.get('/', getAll);
  return router;
}
