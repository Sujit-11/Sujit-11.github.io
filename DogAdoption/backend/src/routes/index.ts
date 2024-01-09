import { Router } from 'express';
import userRoutes from './UserRoutes';
import authRoutes from './AuthRoute';
import dogRoutes from './DogRoute';

const router = Router();

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/dog', dogRoutes);

export default router;
