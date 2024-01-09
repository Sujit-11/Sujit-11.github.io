import { Router } from 'express';
import { login, register } from '../controllers/AuthController';
import { validateReqBody } from '../middlewares/Validator';
import { loginSchema, signupSchema } from '../schema/UserSchema';
const router = Router();

router.post('/register', validateReqBody(signupSchema), register);
router.post('/login', validateReqBody(loginSchema), login);

export default router;
