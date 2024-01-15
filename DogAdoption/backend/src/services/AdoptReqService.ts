import * as adoptReqRepo from '../Repositories/AdoptReqRepo';
import { AdoptReqModel } from '../model/AdoptReqModel';

export class AdoptReqService {
  static createAdoptReq(adoptReq:AdoptReqModel) {
    return adoptReqRepo.createAdoptReq(adoptReq);
  }
  static getAdoptReqByOwnerId(ownerId: number){
    return adoptReqRepo.getAdoptReqByOwnerId(ownerId);
  }
}
