const { Router } = require("express");
const { MeiliSearch } = require("meilisearch");
const dotenv = require("dotenv");

dotenv.config();

const router = Router();

const meiliHost = process.env.MEILI_HOST;
const meiliKey = process.env.MEILI_KEY;

const client = new MeiliSearch({ host: meiliHost, apiKey: meiliKey });

router.post("/", (req, res) => {
  const refIndex = req.get("refIndex");
  const data = req.body;
  client
    .index(refIndex)
    .addDocuments(data)
    .then((response) => {
      res.json({
        reply: response,
      });
    });
});

module.exports = router;
