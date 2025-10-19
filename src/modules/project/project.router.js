const express = require('express');
const projectController = require('./controller/project.controller');
const responseManager = require('../../utils/response-manager.util');
const schemaValidator = require('../../middlewares/schema-validator.middleware');
const {
  createProjectSchema,
  updateProjectSchema,
  getProjectByStatusSchema,
} = require('./schema/project.schema');

const projectRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: API for managing projects
 */

/**
 * @swagger
 * /api/v1/project:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProject'
 *     responses:
 *       201:
 *         description: Project successfully created
 *         content:
 *           application/json:
 *             example:
 *               message: "Project was created with success!"
 *               data:
 *                 id: 4
 *                 name: "New Project"
 *                 description: "This is a new project"
 *                 status: "In progress"
 *                 startDate: "2025-10-19T21:57:14.262Z"
 *                 finishDate: null
 */
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

/**
 * @swagger
 * /api/v1/project:
 *   get:
 *     summary: Retrieve all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of projects successfully retrieved
 *         content:
 *           application/json:
 *             example:
 *               message: "Projects were obtained with success!"
 *               data:
 *                 - id: 3
 *                   name: "New Project"
 *                   description: "This is a new project"
 *                   status: "In progress"
 *                   startDate: "2025-10-19T21:48:28.429Z"
 *                   finishDate: null
 *                 - id: 4
 *                   name: "New Project"
 *                   description: "This is a new project"
 *                   status: "In progress"
 *                   startDate: "2025-10-19T21:57:14.262Z"
 *                   finishDate: null
 */
projectRouter.get('/', async (req, res) => {
  await responseManager(
    res,
    projectController.getAll(),
    200,
    'Projects were obtained with success!'
  );
});

/**
 * @swagger
 * /api/v1/project/graphics:
 *   get:
 *     summary: Retrieve project graphics by status
 *     tags: [Projects]
 *     parameters:
 *       - in: query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *           enum: ['In progress', 'Finished']
 *           example: 'In progress'
 *         description: Filter projects by status
 *     responses:
 *       200:
 *         description: Graphics successfully retrieved
 *         content:
 *           application/json:
 *             example:
 *               message: "Graphics were obtained with success!"
 *               data:
 *                 count: 1
 *                 rows:
 *                   - id: 4
 *                     name: "New Project"
 *                     description: "This is a new project"
 *                     status: "Finished"
 *                     startDate: "2025-10-19T21:57:14.262Z"
 *                     finishDate: "2025-10-19T21:57:59.215Z"
 */
projectRouter.get(
  '/graphics',
  schemaValidator(getProjectByStatusSchema, 'query'),
  async (req, res) => {
    await responseManager(
      res,
      projectController.getByStatus(req.query.status),
      200,
      'Graphics were obtained with success!'
    );
  }
);

/**
 * @swagger
 * /api/v1/project/{id}:
 *   get:
 *     summary: Retrieve a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier of the project
 *     responses:
 *       200:
 *         description: Project successfully retrieved
 *         content:
 *           application/json:
 *             example:
 *               message: "Project was obtained with success!"
 *               data:
 *                 id: 3
 *                 name: "New Project"
 *                 description: "This is a new project"
 *                 status: "In progress"
 *                 startDate: "2025-10-19T21:48:28.429Z"
 *                 finishDate: null
 */
projectRouter.get('/:id', async (req, res) => {
  await responseManager(
    res,
    projectController.getById(req.params.id),
    200,
    'Project was obtained with success!'
  );
});

/**
 * @swagger
 * /api/v1/project/{id}:
 *   patch:
 *     summary: Update a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier of the project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProject'
 *     responses:
 *       200:
 *         description: Project successfully updated
 *         content:
 *           application/json:
 *             example:
 *               message: "Project was updated with success!"
 */
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
  }
);

/**
 * @swagger
 * /api/v1/project/{id}:
 *   delete:
 *     summary: Delete a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier of the project
 *     responses:
 *       200:
 *         description: Project successfully deleted
 *         content:
 *           application/json:
 *             example:
 *               message: "Project was deleted with success!"
 */
projectRouter.delete('/:id', async (req, res) => {
  await responseManager(
    res,
    projectController.delete(req.params.id),
    200,
    'Project was deleted with success!'
  );
});

module.exports = projectRouter;
