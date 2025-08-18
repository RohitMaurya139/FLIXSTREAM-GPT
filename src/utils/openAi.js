import OpenAI from "openai";
const openAi = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openAi
