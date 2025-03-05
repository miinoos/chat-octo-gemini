import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello!" });
});

app.listen(process.env.BACKEND_PORT, () => {
  console.log("Server Running At Port : ", process.env.BACKEND_PORT);
});
