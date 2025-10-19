const express = require('express');
const projectRouter = require('../modules/project/project.router');

const app = express();

app.use(express.json());

app.use('/api/v1/project', projectRouter);

module.exports = app;
