import { Router } from 'express';
import userRoutes from './UserRoutes';
import authRoutes from './AuthRoute';
import dogRoutes from './DogRoute';
import adoptRoutes from './AdoptReqRoute';
// import { authJwt } from '../middlewares/Auth';

const router = Router();

router.use('/user', userRoutes);
router.use(authRoutes);
router.use('/dog', dogRoutes);
router.use('/adopt', adoptRoutes);

export default router;
