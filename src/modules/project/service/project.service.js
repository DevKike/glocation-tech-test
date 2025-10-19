const { Project } = require('../model/project.model.js');

const projectService = {
  save: async (data) => {
    return Project.create(data);
  },

  findAll: async () => {
    return Project.findAll();
  },

  findBy: async (field, value) => {
    return Project.findAndCountAll({
      where: { [field]: value },
    });
  },

  findById: async (id) => {
    return Project.findByPk(id);
  },

  update: async (id, data) => {
    return Project.update({ ...data }, { where: { id } });
  },

  delete: async (id) => {
    await Project.destroy({ where: { id } });
  },
};

module.exports = projectService;
