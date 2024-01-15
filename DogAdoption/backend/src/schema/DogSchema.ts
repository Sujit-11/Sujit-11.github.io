import Joi from 'joi';

export const addDogSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
  gender: Joi.string().required(),
  image: Joi.string().required(),
});
