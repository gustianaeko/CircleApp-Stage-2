import dotenv from "dotenv";
import express, { Express } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("init");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
