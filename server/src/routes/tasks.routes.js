import { Router } from 'express';
import { body } from 'express-validator';

// create router
const router = Router();

// middlewares
import checkBody from '../middlewares/checkBody';

// controllers

export default function TaskRoutes() {
  router.post('/', [body('description', 'Description is required').notEmpty(), checkBody]);

  return router;
}
