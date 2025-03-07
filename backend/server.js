import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const message = "My son took my property illegally, what to do?";

app.get("/chat/api", async (req, res) => {
  const result = await model.generateContent(message);
  res.status(200).send(result.response.text());
});

app.listen(process.env.BACKEND_PORT, () => {
  console.log("Server Running At Port : ", process.env.BACKEND_PORT);
});
