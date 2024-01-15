import { NextFunction, Request, Response } from 'express';
import stat from 'http-status-codes';
import { AdoptReqModel } from '../model/AdoptReqModel';
import { DogModel } from '../model/DogModel';
import { UserModel } from '../model/UserModel';
import { AdoptReqService } from '../services/AdoptReqService';

export const createAdoptReq = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: UserModel = res.locals.user;
    const dog: DogModel[] = res.locals.dog;
    const adoptReq: AdoptReqModel = req.body;
    adoptReq.userId = user.id;
    adoptReq.dogId = dog[0].id;
    await AdoptReqService.createAdoptReq(adoptReq);
    res.status(stat.ACCEPTED).json({
      message: 'Adopt Request Added Successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getAdoptReq = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: UserModel = res.locals.user;
    const adoptReq = await AdoptReqService.getAdoptReqByOwnerId(user.id);
    res.status(stat.ACCEPTED).json({ adoptReq });
  } catch (error) {
    next(error);
  }
};
