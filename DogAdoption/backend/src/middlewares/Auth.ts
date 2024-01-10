import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { CustomRequest } from '../interface/CustomRequest';

export const authJwt = (
  expressReq: Request,
  res: Response,
  next: NextFunction
) => {
  const req = expressReq as CustomRequest;
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token)
  if (!token) res.status(401).json({ message: 'Unauthorized' });
  else {
    try {
      const decoded = jwt.verify(token, config.jwt.accessTokenSecret!);
      req.user = decoded as any;
      console.log('Token' + decoded);
      next();
    } catch (error) {
      res.status(401).send({
        message: 'Unauthorized',
        error
      });
    }
  }
};
