import { Router } from 'express';
import multer from 'multer';

import fotoControllers from '../controllers/fotoControllers';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('foto'), fotoControllers.store);

export default router;
