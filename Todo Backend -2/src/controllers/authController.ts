import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../service/authService';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokens = await AuthService.login(req.body.email, req.body.password);
    res.json(tokens);
  } catch (err) {
    next(err);
  }
};

export const token = (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = AuthService.token(req.body.token);
    res.json(accessToken);
  } catch (err) {
    next(err);
  }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    AuthService.logout(req.body.token);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
