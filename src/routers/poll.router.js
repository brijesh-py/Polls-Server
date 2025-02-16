const { Router } = require("express");
const {
  handleAddVote,
  handleGetPolls,
  handleGetPoll
} = require("../controller/poll.controller");

const router = Router();

router.post("/:id", handleAddVote);
router.get("/", handleGetPolls);
router.get("/:id", handleGetPoll);

module.exports = router;
