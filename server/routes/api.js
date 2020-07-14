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
  b03: "3",
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

module.exports = router;
