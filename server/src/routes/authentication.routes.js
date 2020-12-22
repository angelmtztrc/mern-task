import { Router } from 'express';
import { body } from 'express-validator';

// create router
const router = Router();

// middlewares
import checkBody from '../middlewares/checkBody';

// controllers
import { authenticate } from '../controllers/authentication.controller';

export default function AuthenticationRoutes() {
  router.post(
    '/',
    [
      body('email', 'Insert a valid email').isEmail(),
      body('password', 'Password must have 6 or more characters ').isLength({ min: 6 }),
      checkBody
    ],
    authenticate
  );

  return router;
}
