const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
