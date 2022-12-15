import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.params),
    temperature: 0.6,
    max_tokens: 100,

  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt({prompt}) {
  const params = [
    subject => '',
    pages => '',
    words => '',
    paragraphs => '',
    conclusion => '',
    compareTo => '',
  ];

  return `Generate a ${params['pages']} page essay with ${params['paragraphs']} paragraphs on ${params['subject']} `;
}
