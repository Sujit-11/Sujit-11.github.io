import { NextFunction, Request, Response } from 'express';
import { DogModel } from '../model/DogModel';
import { DogService } from '../services/DogService';
import { UserModel } from '../model/UserModel';

export const getDog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dog = await DogService.getDog();
    // const dog = test.map((Dog) => responseData(Dog));
    res.json({ dog });
  } catch (err) {
    next(err);
  }
};
export const getDogByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dog = await DogService.getDogByUserId();
    res.json({ dog });
  } catch (err) {
    next(err);
  }
};

export const createDog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: UserModel = res.locals.user;
    const dog: DogModel = req.body;
    dog.userId = user.id;
    const data = await DogService.createDog(dog);

    res.status(201).json({ data });
  } catch (err) {
    next(err);
  }
};

export const deleteDog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.user.id;
    console.log(userId);
    const dog = await DogService.deleteDog(parseInt(req.params.id), userId);
    res.json(dog);
  } catch (err) {
    next(err);
  }
};

// const responseData = (Dog: DogModel | undefined) => {
//   if (!Dog) return null;
//   return {
//     name: Dog.name,
//     age: Dog.age,
//     availability: Dog.availability,
//     id: Dog.id,
//     userid: Dog.userId,
//   };
// };
