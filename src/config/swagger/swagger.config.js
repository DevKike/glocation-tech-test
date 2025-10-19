const path = require('path');
const environments = require('../environment/environment.local');

const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Documentation using Swagger',
    },
    servers: [
      {
        url: `http://localhost:${environments.SERVER_PORT}`,
      },
    ],
    components: {
      schemas: {
        CreateProject: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: `Project's name`,
              example: 'New Project',
              minLength: 3,
            },
            description: {
              type: 'string',
              description: `Project's description`,
              example: 'This is a new project',
              minLength: 5,
            },
          },
          required: ['name', 'description'],
        },
        UpdateProject: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: `Project's name`,
              example: 'Updated Project',
              minLength: 3,
            },
            description: {
              type: 'string',
              description: `Project's description`,
              example: 'This is an updated project',
              minLength: 5,
            },
            status: {
              type: 'string',
              description: `Project's status`,
              enum: ['Finished'],
              example: 'Finished',
            },
          },
        },
        GetProjectByStatus: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              description: `Project's status`,
              enum: ['In progress', 'Finished'],
              example: 'In progress',
            },
          },
          required: ['status'],
        },
        Project: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: `Project's unique identifier`,
              example: 4,
            },
            name: {
              type: 'string',
              description: `Project's name`,
              example: 'New Project',
            },
            description: {
              type: 'string',
              description: `Project's description`,
              example: 'This is a new project',
            },
            status: {
              type: 'string',
              description: `Project's status`,
              example: 'In progress',
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: `Project's start date`,
              example: '2025-10-19T21:57:14.262Z',
            },
            finishDate: {
              type: 'string',
              format: 'date-time',
              description: `Project's finish date`,
              example: null,
            },
          },
        },
        GraphicsResponse: {
          type: 'object',
          properties: {
            count: {
              type: 'integer',
              description: 'Number of projects matching the criteria',
              example: 1,
            },
            rows: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Project',
              },
            },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, '../../modules/project/project.router.js')],
};

module.exports = swaggerConfig;
