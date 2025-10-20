const ENVIRONMENT = require('./config/environment/environment');
const app = require('./app/app');
const sequelize = require('./config/db/sequelize.config');

const PORT = ENVIRONMENT.SERVER_PORT;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
});
