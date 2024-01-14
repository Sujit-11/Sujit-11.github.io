import { DogModel } from '../model/DogModel';
import BaseRepo from './BaseRepo';

const query = BaseRepo.queryBuilder();

export const getAllDogs = () => {
  return query.select('*').from('dogs');
};

export const getDogByUserId = ( userId: number) => {
  return query
    .select('*')
    .from('dogs')
    .where({ userId });
};

export const addDog = async (dog: DogModel) => {
  await query.insert(dog).into('dogs');
  return 'Dog Added successfully';
};


export const deleteDog = async (id: number) => {
  await query('dogs').where({ id }).del();
  return 'Dog deleted successfully';
};
