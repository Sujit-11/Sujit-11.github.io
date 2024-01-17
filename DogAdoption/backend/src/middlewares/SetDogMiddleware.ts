import {Request, Response, NextFunction} from 'express';
import { getDogById } from '../Repositories/DogRepo';

export const setDogMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dogId = +req.params.id;
  console.log('req:' + dogId);
  try {
    const dog = await getDogById(dogId);
    console.log(dog);
    res.locals.dog = dog;
    next();
  } catch (error) {
    next(error);
  }
};
