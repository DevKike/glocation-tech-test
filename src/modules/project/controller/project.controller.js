const projectService = require('../service/project.service');
const NotFoundException = require('../../../exceptions/not-found.exception');
const openAIUtil = require('../../../utils/open-ai.util');
const buildOpenAIPrompt = require('../../../helpers/build-open-ai-prompt.helper');

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
    const data = await projectService.findBy('status', status);

    if (!data || data.count === 0)
      throw new NotFoundException(
        `Not projects by status ${status} were found`
      );

    const projects = data.rows.map((project) => project.dataValues);

    const feedback = await projectController.getFeedback(projects);

    return {
      projects,
      feedback,
    };
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

  getFeedback: async (projects) => {
    const prompt = buildOpenAIPrompt(projects);
    return openAIUtil.useModel(prompt);
  },
};

module.exports = projectController;
