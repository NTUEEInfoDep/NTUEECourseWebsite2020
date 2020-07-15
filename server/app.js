import reactRouter from "./routes/reactRouter";

const express = require("express");
const logger = require("morgan");

const apiRouter = require("./routes/api");

const port = process.env.PORT || 8000;
const app = express();

app.use(logger("dev"));
app.use(express.static("bundle")); // frontend static file

app.use("/api", apiRouter);
app.use("/", reactRouter); // react router server side rendering

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
