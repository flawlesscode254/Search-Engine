const { Router } = require("express");
const { MeiliSearch } = require("meilisearch");
const dotenv = require("dotenv");

dotenv.config();

const router = Router();

const meiliHost = process.env.MEILI_HOST;
const meiliKey = process.env.MEILI_KEY;

const client = new MeiliSearch({ host: meiliHost, apiKey: meiliKey });

router.get("/", (req, res) => {
  const refIndex = req.get("refIndex");
  const query = req.get("query");
  client
    .index(refIndex)
    .search(query)
    .then((response) => {
      res.json({
        reply: response,
      });
    });
});

module.exports = router;
