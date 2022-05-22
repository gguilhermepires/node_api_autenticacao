import { Router } from 'express';

import { Healthcheck, Home } from '../../controllers';
import errorCatcherMiddleware from '../../middleware/errorCatcher';

const router = Router();

router.get('/', errorCatcherMiddleware(Home));
router.get('/healthcheck', errorCatcherMiddleware(Healthcheck));

export default router;
