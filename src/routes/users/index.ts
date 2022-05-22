import { Router } from 'express';

import Users from '../../controllers/Users';
import errorCatcherMiddleware from '../../middleware/errorCatcher';

const router = Router();

router.post('/', errorCatcherMiddleware(Users.Add));
router.post('/login', errorCatcherMiddleware(Users.Login));
router.post('/logout', errorCatcherMiddleware(Users.Logout));

export default router;
