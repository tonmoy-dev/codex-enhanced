const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 5000;

const configuration = new Configuration({
  organization: "org-Kyp1K4M7gFo1hURgy6cPLMR0",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => res.send("Hi Codex!"));

app.post("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data);
  res.json({
    data: response.data,
  });
});

app.listen(port, () => console.log(`Running on port http://localhost:${port}`));
