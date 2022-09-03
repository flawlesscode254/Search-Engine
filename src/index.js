import express from "express";

import cors from "cors";
import helmet from "helmet";

import { MeiliSearch } from "meilisearch";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(express.json())

const port = process.env.PORT;
const meiliHost = process.env.MEILI_HOST;
const meiliKey = process.env.MEILI_KEY;

const client = new MeiliSearch({ host: meiliHost, apiKey: meiliKey });

app.listen(port, () => {
  console.log(`Server started and running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Search Engine entry point",
  });
});

app.post("/add", (req, res) => {
  client
    .index("movie")
    .addDocuments(req.body)
    .then((response) => {
      res.json({
        message: response,
      });
    });
});
