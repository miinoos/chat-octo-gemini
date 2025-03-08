import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

app.post("/chat/api", async (req, res) => {
  const { message } = req.body;
  const result = await model.generateContent(message);
  res.status(200).send(result.response.text());
});

app.listen(process.env.BACKEND_PORT, () => {
  console.log("Server Running At Port : ", process.env.BACKEND_PORT);
});
