const projectService = require('../service/project.service');
const NotFoundException = require('../../../exceptions/not-found.exception');

const projectController = {
  create: async (data) => {
    return projectService.save(data);
  },

  getAll: async () => {
    const projects = await projectService.findAll();

    if (!projects || projects.length === 0)
      throw new NotFoundException('Not projects were found');

    return projects;
  },

  getByStatus: async (status) => {
    const projects = await projectService.findBy('status', status);

    if (!projects || projects.count === 0)
      throw new NotFoundException(
        `Not projects by status ${status} were found`
      );

    return projects;
  },

  getById: async (id) => {
    const project = await projectService.findById(id);

    if (!project)
      throw new NotFoundException(`Project by id ${id} was not found`);

    return project;
  },

  update: async (id, data) => {
    if (data.status === 'Finished') data.finishDate = new Date();

    await projectService.update(id, data);
  },

  delete: async (id) => {
    await projectController.getById(id);

    return projectService.delete(id);
  },
};

module.exports = projectController;
