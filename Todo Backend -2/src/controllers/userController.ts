// UserController.ts
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../service/userService';

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = UserService.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.register(req.body.email, req.body.password);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
