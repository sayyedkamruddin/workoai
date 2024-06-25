const Joi = require('joi');

const validateUser = (user) => {
  const schema = Joi.object({
    id:Joi.number().min(1).required(),
    name: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    age:Joi.number().required(),
    city:Joi.string().required(),
    zipCode:Joi.string().max(6).required()
  });

  return schema.validate(user);
};

module.exports = {
  validateUser
};
