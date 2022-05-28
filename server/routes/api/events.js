const router = require("express").Router();
// TODO: events model
// TODO: users model

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

router.post("/:id", (req, res) => {
  try {
    // TODO: retrieve user ID
    // TODO: retrieve an individual event
    // add user to event
    console.info("got a request to add a user to an event");
    console.info("User:", req.body.user);
    console.info("Event:", req.params.id);

    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id", (req, res) => {
  try {
    // TODO: retrieve user ID
    // TODO: retrieve an individual event
    // add user to event
    console.info("got a request to remove a user from an event");
    console.info("User:", req.body.user);
    console.info("Event:", req.params.id);

    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
