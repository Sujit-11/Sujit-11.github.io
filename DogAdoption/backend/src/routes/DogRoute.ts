import { Router } from 'express';
import {
  getDog,
  createDog,
  getDogByUserId,
} from '../controllers/DogController';
import { validateReqBody } from '../middlewares/Validator';
import { addDogSchema } from '../schema/UserSchema';
import { authJwt } from '../middlewares/Auth';

const router = Router();
router.get('/', getDog);
router.get('/:id',authJwt, getDogByUserId);
router.post('/', authJwt, validateReqBody(addDogSchema), createDog);
// router.delete('/:id', authJwt, deleteDog);
export default router;
