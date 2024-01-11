import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const userParamsSchema = Joi.object({
  email: Joi.string().email().required(),
  id: Joi.number().required(),
});

export const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8),
});

export const addDogSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
  gender: Joi.string().required(),
});