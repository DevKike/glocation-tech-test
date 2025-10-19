const { DataTypes, Model } = require('sequelize');

const PROJECT_TABLE = 'projects';
const MODEL_NAME = 'project';

const projectSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM('In progress', 'Finished'),
    defaultValue: 'In progress',
  },
  startDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'start_date',
    defaultValue: DataTypes.NOW,
  },
  finishDate: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'finish_date',
  },
};

class Project extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { PROJECT_TABLE, projectSchema, Project };
