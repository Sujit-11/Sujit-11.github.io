import { Router } from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import todoRoutes from './todoRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use("/user",userRoutes);
router.use("/todo",todoRoutes);

export default router;
