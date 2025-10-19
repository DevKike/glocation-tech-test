const Joi = require('joi');

const name = Joi.string().min(3);
const description = Joi.string().min(5);
const status = Joi.string();

const createProjectSchema = Joi.object({
  name: name.required(),
  description: description.required(),
});

const updateProjectSchema = Joi.object({
  name: name.optional(),
  description: description.optional(),
  status: status.valid('Finished').optional(),
}).min(1);

const getProjectByStatusSchema = Joi.object({
  status: status.valid('In progress', 'Finished').required(),
});

module.exports = {
  createProjectSchema,
  updateProjectSchema,
  getProjectByStatusSchema,
};
