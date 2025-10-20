const { default: OpenAI } = require('openai');
const ENVIRONMENT = require('../environment/environment');

const openAIClient = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: ENVIRONMENT.OPEN_ROUTER_API_KEY,
});

module.exports = openAIClient;
