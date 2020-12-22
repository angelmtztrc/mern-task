import { Router } from 'express';
import { body } from 'express-validator';

// create router
const router = Router();

// middlewares
import checkBody from '../middlewares/checkBody';

// controllers
import { create } from '../controllers/user.controller';

export default function userRoutes() {
  router.post(
    '/',
    [
      body('name', 'Name is required').notEmpty(),
      body('email', 'Insert a valid email').isEmail(),
      body('password', 'Password must have 6 or more characters ').isLength({ min: 6 }),
      checkBody
    ],
    create
  );

  return router;
}
