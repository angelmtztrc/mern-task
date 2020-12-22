import { Router } from 'express';

// create router
const router = Router();

export default function userRoutes() {
  router.get('/', (req, res) => {
    res.json({
      message: 'Hello world from Users!'
    });
  });

  return router;
}
