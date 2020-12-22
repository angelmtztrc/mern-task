import { Router } from 'express';
import { body } from 'express-validator';

// create router
const router = Router();

// middlewares
import checkBody from '../middlewares/checkBody';

// controllers
import { create } from '../controllers/project.controller';

export default function ProjectRoutes() {
  router.post('/', [body('name', 'Name is required').notEmpty(), checkBody], create);

  return router;
}
