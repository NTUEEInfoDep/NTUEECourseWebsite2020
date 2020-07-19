import apiRouter from "./routes/api";
import reactRouter from "./routes/reactRouter";

const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const constants = require("./constants.json");

// ========================================

const port = process.env.PORT || 8000;

// ========================================

mongoose.connect(`mongodb://${constants.mongoHost}/${constants.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Successfully connect to MongoDB!");
  console.log(`dbName = "${constants.dbName}"`);

  const app = express();

  if (process.env.NODE_ENV === "production") {
    console.log("Trust proxy is on");
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
