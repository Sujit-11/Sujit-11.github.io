import {Router} from 'express';
import userRoutes from './UserRoutes';
import authRoutes from './AuthRoute';

const router = Router();

router.use('/user',userRoutes);
router.use('/auth',authRoutes);

export default router;