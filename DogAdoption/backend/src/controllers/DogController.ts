import { NextFunction, Request, Response } from 'express';
import { DogModel } from '../model/DogModel';
import { DogService } from '../services/DogService';
import { UserModel } from '../model/UserModel';
import stat from 'http-status-codes';

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
    const userId = res.locals.user.id;
    const dog = await DogService.getDogByUserId(userId);
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
    await DogService.createDog(dog);

    res.status(stat.ACCEPTED).json({
      message:'Dog Added Successfully'
    });
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
    const dogId = req.params.id;
    await DogService.deleteDog(parseInt(dogId));
    res.json({message:`Dog with id:${dogId} Deleted Successfully`});
  } catch (err) {
    next(err);
  }
};

export const updateDog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dogId = parseInt(req.params.id);
    const dogData: Partial<DogModel> = req.body;
    const updatedDog = await DogService.updateDog(dogId, dogData);
    res.status(stat.ACCEPTED).json({ message: 'Dog updated successfully', updatedDog });
  } catch (err) {
    next(err);
  }
};
