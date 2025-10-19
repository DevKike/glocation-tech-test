'use strict';

const {
  PROJECT_TABLE,
  projectSchema,
} = require('../../modules/project/model/project.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PROJECT_TABLE, projectSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(
      await queryInterface.createTable(PROJECT_TABLE, projectSchema)
    );
  },
};
