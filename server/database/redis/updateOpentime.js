// Update opentime

const redis = require("redis");

const constants = require("../../constants.json");
const openTime = require("../data/openTime.json");

// ========================================

module.exports = () => {
  const client = redis.createClient(6379, constants.redisHost);
  client.on("error", console.error);

  const { startKey, endKey } = constants.openTimeKey;
  client.hmset([startKey, ...Object.entries(openTime.start).flat()]);
  client.hmset([endKey, ...Object.entries(openTime.end).flat()]);

  console.log("openTime updated!");

  client.quit();
};
