import { AdoptReqModel } from '../model/AdoptReqModel';
import BaseRepo from './BaseRepo';

const query = BaseRepo.queryBuilder();

export const createAdoptReq = async (adoptReq: AdoptReqModel) => {
  await query.insert(adoptReq).into('requests');
};

export const getAdoptReqByOwnerId = (ownerId: number) => {
  return query
    .select('requests.*', 'users.name as requester_name', 'users.email as requester_email', 'dogs.name as dog_name')
    .from('requests')
    .join('dogs', 'requests.dog_id', '=', 'dogs.id')
    .join('users', 'requests.user_id', '=', 'users.id')
    .where('dogs.user_id', ownerId);
};

