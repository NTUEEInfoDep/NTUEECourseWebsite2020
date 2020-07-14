const express = require("express");
const session = require("express-session");

const router = express.Router();

// ========================================

const sessionOptions = {
  secret: "5b991392-c5db-11ea-9576-80c5f2674335",
  unset: "destroy",
};

if (process.env.NODE_ENV === "production") {
  throw new Error(
    "Must set session store other than MemoryStore, not implemented yet"
  );
  sessionOptions.cookie.secure = true; // Need https
}

const fakeUsers = {
  b01: "1",
  b02: "2",
};

const courses = {
  ex: {
    name: "電子學實驗",
    type: "0",
    options: {
      a: "星期一 2:00~3:00",
      b: "星期二 6:00~7:00",
    },
  },
  ten: {
    name: "十選二",
    type: "0",
    options: {
      a: "數電",
      b: "網多",
    },
  },
  ec: {
    name: "電路學",
    type: "1",
    options: {
      a: "A教授",
      b: "B教授",
    },
  },
  clac: {
    name: "微積分",
    type: "1",
    options: {
      a: "A教授",
      b: "B教授",
    },
  },
  ee: {
    name: "電子學",
    type: "2",
    options: {
      a: "A教授",
      b: "B教授",
    },
  },
  em: {
    name: "電磁學",
    type: "2",
    options: {
      a: "A教授",
      b: "B教授",
    },
  },
  algo: {
    name: "演算法",
    type: "3",
    options: {
      a: "A教授",
      b: "B教授",
    },
  },
};

const selections = {
  b01: {
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

router.use(session(sessionOptions));

router.get("/", (req, res, next) => {
  res.send("api");
});

router
  .route("/session")
  .get((req, res, next) => {
    if (!req.session.userID) {
      res.status(403).end();
      return;
    }
    res.send({ userID: req.session.userID });
  })
  .post(express.urlencoded(), (req, res, next) => {
    const { userID, password } = req.body;
    if (fakeUsers[userID] !== password) {
      res.status(401).end();
      return;
    }
    req.session.userID = userID;
    res.status(201).send({ userID });
  })
  .delete((req, res, next) => {
    if (!req.session.userID) {
      res.status(403).end();
      return;
    }
    req.session = null;
    res.status(204).end();
  });

router.get("/courses", (req, res, next) => {
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
});

router
  .route("/selections/:courseID")
  .all((req, res, next) => {
    if (!req.session.userID) {
      res.status(403).end();
      return;
    }
    next();
  })
  .get((req, res, next) => {
    const { userID } = req.session;
    const { courseID } = req.params;
    const course = courses[courseID];
    const selectedIDs = selections[userID][courseID];
    const unselectedIDs = Object.keys(course.options).filter(
      (optionID) => !selectedIDs.includes(optionID)
    );
    const selected = [];
    const unselected = [];
    selectedIDs.forEach((optionID) => {
      selected.push({ optionID, name: course.options[optionID] });
    });
    unselectedIDs.forEach((optionID) => {
      unselected.push({ optionID, name: course.options[optionID] });
    });
    const data = {
      name: course.name,
      type: course.type,
      selected,
      unselected,
    };
    res.send(data);
  })
  .put(express.json(), (req, res, next) => {
    const { userID } = req.session;
    const { courseID } = req.params;
    // TODO: Validation
    selections[userID][courseID] = req.body;
    res.status(204).end();
  });

module.exports = router;
