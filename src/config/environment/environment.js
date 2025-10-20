const { config } = require('dotenv');

const env = process.env.NODE_ENV || 'dev';
config({ path: `.env.${env}` });

const ENVIRONMENT = {
  SERVER_PORT: process.env.SERVER_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_PORT: process.env.DB_PORT,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

module.exports = ENVIRONMENT;
