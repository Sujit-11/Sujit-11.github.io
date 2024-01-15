import { Router } from 'express';
import {
  getDog,
  createDog,
  deleteDog,
  getDogByUserId,
  updateDog,
} from '../controllers/DogController';
import { validateReqBody } from '../middlewares/Validator';
import { addDogSchema } from '../schema/DogSchema';
import { authJwt } from '../middlewares/Auth';

const router = Router();
router.get('/', getDog);
router.get('/:id',authJwt, getDogByUserId);
router.post('/', authJwt, validateReqBody(addDogSchema), createDog);
router.delete('/:id', authJwt, deleteDog);
router.put('/:id', authJwt, updateDog);

export default router;
