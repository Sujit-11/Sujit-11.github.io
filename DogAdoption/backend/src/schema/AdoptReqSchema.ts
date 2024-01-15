import Joi from 'joi';

export const adoptReqSchema = Joi.object({
  adoption_phone: Joi.string().required(),
  adoption_interest: Joi.string().required(),
});
