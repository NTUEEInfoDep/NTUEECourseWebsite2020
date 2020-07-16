const mongoose = require("mongoose");
const courses = require("./data/courses");

// ========================================

const courseSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  description: String,
  options: [String],
});

const Course = mongoose.model("Course", courseSchema);

// ========================================

const courseIDs = courses.map((course) => course.id);
const selections = {};
courseIDs.forEach((courseID) => {
  selections[courseID] = [String];
});

const userSchema = new mongoose.Schema({
  userID: String,
  grade: Number,
  password: String,
  selections,
});

const Student = mongoose.model("Student", userSchema);

// ========================================

module.exports = {
  Course,
  Student,
};
