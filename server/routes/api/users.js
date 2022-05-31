const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  try {
    // TODO: send user information
    //TODO: express session
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", (req, res) => {
  try {
    // TODO: express session
    res.sendStatus(200);
  } catch (err) {
    res.status(5000).json(err);
  }
});

router.post("/logout", (req, res) => {
  try {
    // TODO: express session
    res.sendStatus(200);
  } catch (err) {
    res.status(5000).json(err);
  }
});

module.exports = router;
