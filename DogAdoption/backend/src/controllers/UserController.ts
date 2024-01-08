import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';

export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};
