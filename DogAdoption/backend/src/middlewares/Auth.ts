import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { CustomRequest } from '../interface/CustomRequest';
import { getUserById } from '../Repositories/UserRepo';

export const authJwt = async (
  expressReq: Request,
  res: Response,
  next: NextFunction
) => {
  const req = expressReq as CustomRequest;
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) res.status(401).json({ message: 'Unauthorized' });
  else {
    try {
      const decoded = jwt.verify(token!, config.jwt.accessTokenSecret!);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const userid = (decoded as any).id;
      const getUser = await getUserById(userid);
      res.locals.user = getUser;
      next();
    } catch (error) {
      res.status(401).send({
        message: 'Unauthorized',
        error,
      });
    }
  }
};
