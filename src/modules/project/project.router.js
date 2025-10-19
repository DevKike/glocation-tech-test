const express = require('express');
const projectController = require('./controller/project.controller');
const responseManager = require('../../utils/response-manager.util');
const schemaValidator = require('../../middlewares/schema-validator.middleware');
const {
  createProjectSchema,
  updateProjectSchema,
} = require('./schema/project.schema');

const projectRouter = express.Router();

projectRouter.post(
  '/',
  schemaValidator(createProjectSchema),
  async (req, res) => {
    await responseManager(
      res,
      projectController.create(req.body),
      201,
      'Project was created with success!'
    );
  }
);

projectRouter.get('/', async (req, res) => {
  await responseManager(
    res,
    projectController.getAll(),
    200,
    'Projects were obtained with success!'
  );
});

projectRouter.get('/:id', async (req, res) => {
  await responseManager(
    res,
    projectController.getById(req.params.id),
    200,
    'Project was obtained with success!'
  );
});

projectRouter.patch(
  '/:id',
  schemaValidator(updateProjectSchema),
  async (req, res) => {
    await responseManager(
      res,
      projectController.update(req.params.id, req.body),
      200,
      'Project was updated with success!'
    );
  },

  projectRouter.delete('/:id', async (req, res) => {
    await responseManager(
      res,
      projectController.delete(req.params.id),
      200,
      'Project was deleted with success!'
    );
  })
);

module.exports = projectRouter;
