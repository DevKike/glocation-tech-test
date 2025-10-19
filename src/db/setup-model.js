const {
  Project,
  projectSchema,
} = require('../modules/project/model/project.model');

const setupModel = (sequelize) => {
  Project.init(projectSchema, Project.config(sequelize));
};

module.exports = setupModel;
