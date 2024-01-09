import { DogModel } from '../model/DogModel';
import BaseRepo from './BaseRepo';

const query = BaseRepo.queryBuilder();

export const addDog = async (dog: DogModel) => {
  await query.insert(dog).into('dogs');
  return 'Dog Added successfully';
};
