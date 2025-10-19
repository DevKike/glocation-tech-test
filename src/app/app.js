const express = require('express');
const projectRouter = require('../modules/project/project.router');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('../config/swagger/swagger.config');
const swaggerUi = require('swagger-ui-express');

const app = express();

const swaggerDocs = swaggerJSDoc(swaggerConfig);

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/v1/project', projectRouter);

module.exports = app;
