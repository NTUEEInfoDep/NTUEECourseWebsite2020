const mongoose = require("mongoose");

const constants = require("../constants");
const model = require("./model");
const courses = require("./data/courses");

// ========================================

mongoose.connect(`mongodb://localhost/${constants.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Successfully connect to MongoDB!");
  console.log(`dbName = "${constants.dbName}"`);
  // Drop the db
  await db.dropDatabase();
  console.log("Database has been cleared.");

  // Save all courses
  await Promise.all(
    courses.map(async (course) => {
      const courseDocument = new model.Course(course);
      await courseDocument.save();
    })
  );
  console.log("All courses are saved.");

  await mongoose.disconnect();
});
