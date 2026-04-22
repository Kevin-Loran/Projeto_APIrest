import { Router } from 'express';
import userController from '../controllers/userControllers';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// isso aqui não é aplicável em uma aplicação real.
// router.get('/', userController.index);// lista usuários
// router.get('/', userController.show);// mostra usuario

router.post('/', userController.store); // cria usuários
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os  usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
Update -> atualiza um usuário -> PATCH ou PUT
 */
