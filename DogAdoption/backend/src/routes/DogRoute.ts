import { Router } from 'express';
import { createDog } from '../controllers/DogController';
import { validateReqBody } from '../middlewares/Validator';
import { addDogSchema } from '../schema/UserSchema';


const router = Router();
router.post('/addDog',validateReqBody(addDogSchema), createDog);
export default router;
