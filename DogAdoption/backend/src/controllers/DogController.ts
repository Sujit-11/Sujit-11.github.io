import { Request, Response, NextFunction } from 'express';
import {DogService} from '../services/DogService';

export const createDog = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const todo = (await DogService.createDog(
        // createData(req)
        req.body
      ));
      res.status(201).json({todo});
    } catch (err) {
      next(err);
    }
  };