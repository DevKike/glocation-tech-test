const Joi = require('joi');

const name = Joi.string().min(3);
const description = Joi.string().min(5);

const createProjectSchema = Joi.object({
  name: name.required(),
  description: description.required(),
});

const updateProjectSchema = Joi.object({
  name: name.optional(),
  description: description.optional(),
  status: Joi.string().valid('Finished').optional(),
}).min(1);

module.exports = { createProjectSchema, updateProjectSchema };
