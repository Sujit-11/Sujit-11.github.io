import { Router } from 'express';
import { createAdoptReq, getAdoptReq } from '../controllers/AdoptReqController';
import { authJwt } from '../middlewares/Auth';
import { validateReqBody } from '../middlewares/Validator';
import { adoptReqSchema } from '../schema/AdoptReqSchema';
import { setDogMiddleware } from '../middlewares/SetDogMiddleware';

const router = Router();

router.get('/', authJwt, getAdoptReq);

router.post(
  '/:id',
  authJwt,
  setDogMiddleware,
  validateReqBody(adoptReqSchema),
  createAdoptReq
);

export default router;
