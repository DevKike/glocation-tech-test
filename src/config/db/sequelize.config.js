const { Sequelize } = require('sequelize');
const setupModel = require('../../db/setup-model');
const environment = require('../environment/environment.dev');

const sequelize = new Sequelize(
  environment.DB_NAME,
  environment.DB_USER,
  environment.DB_PASSWORD,
  {
    host: environment.DB_HOST,
    port: environment.DB_PORT,
    dialect: environment.DB_DIALECT,
    logging: false,
  }
);

setupModel(sequelize);

module.exports = sequelize;
