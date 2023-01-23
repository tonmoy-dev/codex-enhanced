const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const configuration = new Configuration({
  organization: "org-Kyp1K4M7gFo1hURgy6cPLMR0",
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => res.send("Hi Codex!"));

app.post("/", async (req, res) => {
  const { text } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${text}`,
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  // console.log(response.data);
  res.json({
    text: response.data.choices[0].text,
    // text: text,
  });
});

// async function callapi() {
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Say this is a test",
//     max_tokens: 7,
//     temperature: 0,
//   });
//   console.log(response.data);
// }
//
// callapi();
app.listen(port, () => console.log(`Running on port http://localhost:${port}`));
