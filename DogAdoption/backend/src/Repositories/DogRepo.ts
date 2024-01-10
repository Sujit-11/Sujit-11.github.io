import { DogModel } from '../model/DogModel';
import BaseRepo from './BaseRepo';

const query = BaseRepo.queryBuilder();

export const getAllDogs = () => {
  return query.select('*').from('dogs');
};

export const getDogById = (id: number, userId: number) => {
  return query
    .select({ id: 'dogs.id', userId: 'dogs.user_id' })
    .from('dogs')
    .where({ id, userId })
    .first();
};

export const addDog = async (dog: DogModel) => {
  await query.insert(dog).into('dogs');
  return 'Dog Added successfully';
};


export const deleteDog = async (id: number) => {
  await query('dogs').where({ id }).del();
  return 'Dog deleted successfully';
};
