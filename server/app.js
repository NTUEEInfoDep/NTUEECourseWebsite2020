import apiRouter from "./routes/api";
import reactRouter from "./routes/reactRouter";

const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const constants = require("./constants.json");

// ========================================

const mongodbHost = process.env.DEPLOY ? "mongodb" : "localhost";
const port = process.env.PORT || 8000;

// ========================================

mongoose.connect(`mongodb://${mongodbHost}/${constants.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Successfully connect to MongoDB!");
  console.log(`dbName = "${constants.dbName}"`);

  const app = express();

  if (process.env.DEPLOY) {
    app.set("trust proxy", 1);
  }

  app.use(logger("dev"));
  app.use(express.static("assets"));
  app.use(express.static("bundle")); // frontend static file

  app.use("/api", apiRouter);
  app.use("/", reactRouter); // react router server side rendering

  app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
  );
});
