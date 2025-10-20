const openAIClient = require('../config/open-ai/open-ai.config');
const InvalidFormatException = require('../exceptions/invalid-format.exception');
const cleanOpenAIResponseHelper = require('../helpers/clean-open-ai-response.helper');

const openAIUtil = {
  useModel: async (input) => {
    const completion = await openAIClient.chat.completions.create({
      model: 'deepseek/deepseek-chat-v3.1:free',
      messages: [
        {
          role: 'user',
          content: input,
        },
      ],
    });

    const response = completion.choices[0].message.content || '';
    const parsed = cleanOpenAIResponseHelper(response);

    try {
      return parsed;
    } catch (error) {
      throw new InvalidFormatException('Invalid JSON format from model');
    }
  },
};

module.exports = openAIUtil;
