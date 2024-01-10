import { NextFunction, Request, Response } from 'express';
import { DogModel } from '../model/DogModel';
import { DogService } from '../services/DogService';
import { UserModel } from '../model/UserModel';

export const createDog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: UserModel = res.locals.user;
    console.log('User' + user.id);
    const dog: DogModel = req.body;
    dog.user_id = user.id;
    const data = await DogService.createDog(dog);

    res.status(201).json({ data });
  } catch (err) {
    next(err);
  }
};
