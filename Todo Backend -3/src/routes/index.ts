import { Router } from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import todoRoutes from './todoRoutes';
import { authJwt } from '../middleware/authJwt';

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/todo', authJwt, todoRoutes);

export default router;
