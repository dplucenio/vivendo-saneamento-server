import {Router} from 'express';
import subscribersRouter from './subscribersRouter';
import messagesRouter from './messagesRouter';
import sessionsRouter from './sessionsRouter';

let router = new Router();
router.use('/sessions', sessionsRouter);
router.use('/subscribers', subscribersRouter);
router.use('/messages', messagesRouter);

export default router;