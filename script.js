import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
    organisation: "org-3iAbYF3p9Mq4kCKBUagXSKe4",
    apikey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => { 

const { message } = req.body;  

    const completion = await openai.createChatCompletetion({
        model: "gpt-3.5-turbo",
        message: [
            {role: "user", content: `${message}`},
        ]
    })



res.json({
    completion: completion.data.choices[0].message
})

});

app.listen(port, () => {
console.log(`Exapmple app listening at http://localhost:${port}`);
});

