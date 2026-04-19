import { Router } from 'express';
import tokenControllers from '../controllers/tokenControllers';

const router = new Router();

router.get('/', tokenControllers.store);

export default router;
