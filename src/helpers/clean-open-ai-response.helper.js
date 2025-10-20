const cleanOpenAIResponseHelper = (response) => {
  response = response.replace(/```json|```/g, '').trim();

  const jsonMatch = response.match(/\{[\s\S]*\}/);

  const cleanJson = jsonMatch[0];

  return JSON.parse(cleanJson);
};

module.exports = cleanOpenAIResponseHelper;
