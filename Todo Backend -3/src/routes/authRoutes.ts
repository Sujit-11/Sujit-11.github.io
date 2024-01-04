import { Router } from 'express';
import * as userAuth from '../controllers/authController';
import { validateReqBody } from "../middleware/validator";
import { loginSchema } from "../schema/userSchema";

const router = Router();

router.post('/login',validateReqBody(loginSchema), userAuth.login);
router.post('/token', userAuth.token);
router.delete('/logout', userAuth.logout);

export default router;
