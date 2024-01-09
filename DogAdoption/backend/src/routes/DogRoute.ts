import { Router } from 'express';
import { createDog } from '../controllers/DogController';

const router = Router();
router.post('/', createDog);
export default router;
