import { Router } from 'express';

import Client from '../../controllers/Client';
import errorCatcherMiddleware from '../../middleware/errorCatcher';

const router = Router({ mergeParams: true });

router.post('/', errorCatcherMiddleware(Client.Add));
router.get('/:clientId', errorCatcherMiddleware(Client.Get));
router.get('/', errorCatcherMiddleware(Client.GetAll));
router.put('/:clientId', errorCatcherMiddleware(Client.Update));
router.delete('/:clientId', errorCatcherMiddleware(Client.Delete));

export default router;
