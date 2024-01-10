import { Router } from 'express';
import userRoutes from './UserRoutes';
import authRoutes from './AuthRoute';
import dogRoutes from './DogRoute';
import { authJwt } from '../middlewares/Auth';


const router = Router();

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/dog',authJwt, dogRoutes);

export default router;
