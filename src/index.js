const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

const AddSearchData = require("../routes/AddSearchData");
const SearchData = require("../routes/SearchData");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(express.json());

app.use("/add", AddSearchData);
app.use("/search", SearchData);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started and running on http://localhost:${port}`);
});
