import { NextFunction, Request, Response, Router } from 'express';

import NotFoundException from '../errors/NotFoundException';
import errorHandlerMiddleware from '../middleware/errorHandler';
import HomeRouter from './home';
import ClientRouter from './client';
import UsersRouter from './users';

const router = Router();

router.use('/', HomeRouter);
router.use('/users', UsersRouter);
router.use('/clients', ClientRouter);

router.use((req: Request, res: Response, next: NextFunction) =>
  next(new NotFoundException()),
);

router.use(errorHandlerMiddleware);

export default router;
