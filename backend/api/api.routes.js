const router = require("express").Router();
const { Floors } = require("../db/models");
router.get("/apartments", async (req, res) => {
  try {
    const users = await Floors.findAll({ raw: true });
    res.json(users);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
