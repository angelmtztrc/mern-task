import { Router } from 'express';

// create router
const router = Router();

// controllers
import { create } from '../controllers/user.controller';

export default function userRoutes() {
  router.post('/', create);

  return router;
}
