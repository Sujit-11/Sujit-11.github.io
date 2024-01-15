import {Request, Response, NextFunction} from 'express';
import { getDogById } from '../Repositories/DogRepo';

export const setDogMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Assuming you have a way to get the dog's ID from the request
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
