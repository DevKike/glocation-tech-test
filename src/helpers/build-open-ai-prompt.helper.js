const buildOpenAIPromptHelper = (projects) => {
  const projectsToString = JSON.stringify(projects, null, 2);

  return `
You are a data analysis assistant.

Analyze the following list of projects (in JSON):

${projectsToString}

Your task:
- Compute key statistics about the projects.
- Return your response **strictly in valid JSON** following this schema:

{
  "summary": "short motivational or analytical text",
  "stats": {
    "totalProjects": number,
    "finishedPercentage": number,
    "inProgressPercentage": number,
    "pendingPercentage": number,
    "unfinishedCount": number
  }
}

❗ Important rules:
- Output only the JSON object, nothing else.
- Do NOT use triple backticks.
- Do NOT include markdown, explanations, or text outside the JSON.
  `;
};

module.exports = buildOpenAIPromptHelper;
