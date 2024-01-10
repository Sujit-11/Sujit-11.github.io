import { Request, Response, NextFunction } from 'express';
import { DogService } from '../services/DogService';
import { CustomRequest } from '../interface/CustomRequest';

export const createDog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (req as CustomRequest).user;
    const dog = await DogService.createDog(createData(req));
    res.status(201).json({ dog });
  } catch (err) {
    next(err);
  }
};

const createData = (req: Request) => {
  const user = (req as CustomRequest).user;
  return { ...req.body, user_id: user.id };
};
