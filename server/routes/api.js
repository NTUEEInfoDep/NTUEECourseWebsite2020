const express = require("express");
const session = require("express-session");
const asyncHandler = require("express-async-handler");
const redis = require("redis");
const connectRedis = require("connect-redis");
const bcrypt = require("bcrypt");
const debug = require("debug")("ntuee-course:api");
const deprecate = require("depd")("ntuee-course:api");

const constants = require("../constants.json");
const model = require("../database/model");

// ========================================

const router = express.Router();

const sessionOptions = {
  cookie: {
    path: "/",
    httpOnly: true,
    secure: false,
    maxAge: null,
  },
  resave: false,
  saveUninitialized: false,
  secret: "5b991392-c5db-11ea-9576-80c5f2674335",
  unset: "destroy",
};

if (process.env.NODE_ENV === "production") {
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();
  redisClient.on("error", console.error);
  sessionOptions.store = new RedisStore({
    client: redisClient,
    prefix: "ntuee-course-session:",
  });

  // clear all sessions in redis
  sessionOptions.store.clear();

  // sessionOptions.cookie.secure = true; // Need https
  if (!sessionOptions.cookie.secure) {
    deprecate("Recommend to set secure cookie session if has https!\n");
  }
}

router.use(session(sessionOptions));

// ========================================

const courses = {
  ex: {
    name: "電子學實驗",
    type: "0",
    description: "這是一門神奇的課",
    options: ["星期一 2:00~3:00", "星期二 6:00~7:00"],
  },
  ten: {
    name: "十選二",
    type: "0",
    options: [
      "數電",
      "網多",
      "嵌入式",
      "電子電路",
      "光電",
      "微波",
      "電腦",
      "交電",
      "電路",
    ],
    description: "這是一門神奇的課",
  },
  ec: {
    name: "電路學",
    type: "1",
    options: ["A教授", "B教授", "C教授", "D教授"],
    description: "這是一門神奇的課",
  },
  clac: {
    name: "微積分",
    type: "1",
    options: ["A教授", "B教授", "C教授", "D教授"],
    description: "這是一門神奇的課",
  },
  ee: {
    name: "電子學",
    type: "2",
    options: ["A教授", "B教授", "C教授", "D教授"],
    description: "這是一門神奇的課",
  },
  em: {
    name: "電磁學",
    type: "2",
    options: ["A教授", "B教授", "C教授", "D教授"],
    description: "這是一門神奇的課",
  },
  algo: {
    name: "演算法",
    type: "3",
    options: ["A教授", "B教授", "C教授", "D教授"],
    description: "這是一門神奇的課",
  },
};

const selections = {
  b01901123: {
    ex: [],
    ten: [],
    ec: [],
    clac: [],
    ee: [],
    em: [],
    algo: [],
  },
  b02: {
    ex: [],
    ten: [],
    ec: [],
    clac: [],
    ee: [],
    em: [],
    algo: [],
  },
};

// ========================================

router.get("/", (req, res, next) => {
  res.send("api");
});

router
  .route("/session")
  .get(
    asyncHandler(async (req, res, next) => {
      if (!req.session.userID) {
        res.status(403).end();
        return;
      }
      res.send({ userID: req.session.userID });
    })
  )
  .post(
    express.urlencoded({ extended: false }),
    asyncHandler(async (req, res, next) => {
      let { userID } = req.body;
      const { password } = req.body;

      if (!userID || !password) {
        res.status(400).end();
        return;
      }
      userID = userID.toUpperCase();

      const user = await model.Student.findOne({ userID }).exec();
      if (!user) {
        res.status(400).end();
        return;
      }
      const passwordHash = user.password;

      // Check password with the passwordHash
      const match = await bcrypt.compare(password, passwordHash);
      if (!match) {
        res.status(401).end();
        return;
      }

      req.session.userID = userID;
      res.status(201).send({ userID });
    })
  )
  .delete(
    asyncHandler(async (req, res, next) => {
      req.session = null;
      res.status(204).end();
    })
  );

router.get(
  "/courses",
  asyncHandler(async (req, res, next) => {
    if (!req.session.userID) {
      res.status(403).end();
      return;
    }
    const data = {};
    Object.keys(courses).forEach((courseID) => {
      const courseType = courses[courseID].type;
      const singleCourse = {
        courseID,
        name: courses[courseID].name,
      };
      if (!data[courseType]) {
        data[courseType] = [singleCourse];
      } else {
        data[courseType].push(singleCourse);
      }
    });
    res.send(data);
  })
);

router
  .route("/selections/:courseID")
  .all(
    asyncHandler(async (req, res, next) => {
      if (!req.session.userID) {
        res.status(403).end();
        return;
      }
      const { courseID } = req.params;
      const course = courses[courseID];
      if (!course) {
        res.sendStatus(404);
        return;
      }
      next();
    })
  )
  .get(
    asyncHandler(async (req, res, next) => {
      const { userID } = req.session;
      const { courseID } = req.params;
      const course = courses[courseID];
      const { name, type, description } = course;
      const selected = selections[userID][courseID];
      const unselected = course.options.filter(
        (option) => !selected.includes(option)
      );
      res.send({ name, type, description, selected, unselected });
    })
  )
  .put(
    express.json({ strict: false }),
    asyncHandler(async (req, res, next) => {
      const { userID } = req.session;
      const { courseID } = req.params;
      const { options } = courses[courseID];

      // Validation
      if (!Array.isArray(req.body)) {
        res.status(400).end();
        return;
      }
      if (!req.body.every((option) => options.includes(option))) {
        res.status(400).end();
        return;
      }

      selections[userID][courseID] = req.body;
      res.status(204).end();
    })
  );

export default router;
