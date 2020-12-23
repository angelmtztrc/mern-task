import { Router } from 'express';
import { body, query } from 'express-validator';

// create router
const router = Router();

// middlewares
import checkBody from '../middlewares/checkBody';
import checkToken from '../middlewares/checkToken';

// controllers
import { create, getAllByProject, remove } from '../controllers/task.controller';

export default function TaskRoutes() {
  // all routes are private
  router.use(checkToken);

  // create a task
  router.post(
    '/',
    [
      body('description', 'Description is required').notEmpty(),
      body('status', 'Status is required')
        .isIn(['TODO', 'IN PROGRESS', 'COMPLETED'])
        .withMessage('Insert a valid status'),
      body('project', 'Project ID is required').notEmpty().isMongoId(),
      checkBody
    ],
    create
  );

  // get all task of a project
  router.get('/', getAllByProject);

  // delete task
  router.delete('/:id', remove);

  return router;
}
