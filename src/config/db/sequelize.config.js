const { Sequelize } = require('sequelize');
const setupModel = require('../../db/setup-model');
const ENVIRONMENT = require('../environment/environment');

const sequelize = new Sequelize(
  ENVIRONMENT.DB_NAME,
  ENVIRONMENT.DB_USER,
  ENVIRONMENT.DB_PASSWORD,
  {
    host: ENVIRONMENT.DB_HOST,
    port: ENVIRONMENT.DB_PORT,
    dialect: ENVIRONMENT.DB_DIALECT,
    logging: false,
  }
);

setupModel(sequelize);

module.exports = sequelize;
