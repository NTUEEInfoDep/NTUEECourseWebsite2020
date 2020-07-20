// Update opentime

const redis = require("redis");

const constants = require("../../constants.json");
const openTime = require("../data/openTime.json");

// ========================================

module.exports = () => {
  const startTimeKey = "ntuee-course-startTime";
  const endTimeKey = "ntuee-course-endTime";

  const client = redis.createClient(6379, constants.redisHost);
  client.on("error", console.error);

  client.hmset([startTimeKey, ...Object.entries(openTime.start).flat()]);
  client.hmset([endTimeKey, ...Object.entries(openTime.end).flat()]);

  console.log("openTime updated!");

  client.quit();
};
