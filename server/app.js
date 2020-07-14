const express = require("express");
const logger = require("morgan");

const apiRouter = require("./routes/api");

const port = process.env.PORT || 8000;
const app = express();

app.use(logger("dev"));

app.use("/api", apiRouter);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
