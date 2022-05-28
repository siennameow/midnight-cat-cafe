const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    // TODO: retrieve events from DB
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  try {
    console.info("got a request for ID: ", req.params.id);
    // TODO: retrieve events from DB
    // TODO: get individual event
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  try {
    // TODO: retrieve user ID

    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
