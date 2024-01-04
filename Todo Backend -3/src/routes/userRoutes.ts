import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', userController.getUsers);
router.post('/register', userController.register);

export default router;
