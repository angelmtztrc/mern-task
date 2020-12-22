import { Router } from 'express';
import { body } from 'express-validator';

// create router
const router = Router();

// middlewares
import checkBody from '../middlewares/checkBody';
import checkToken from '../middlewares/checkToken';

// controllers
import { create, getAll, remove, update } from '../controllers/project.controller';

export default function ProjectRoutes() {
  // all routes are private
  router.use(checkToken);

  // create project
  router.post('/', [body('title', 'Title is required').notEmpty(), checkBody], create);

  // get all projects of the current user
  router.get('/', getAll);

  // update a project
  router.put('/:id', [body('title', 'Title is required').notEmpty(), checkBody], update);

  // delete a project
  router.delete('/:id', remove);

  return router;
}
