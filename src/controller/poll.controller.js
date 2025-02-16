const { Poll } = require("../../models");

const handleAddVote = async (req, res) => {
  try {
    const questionId = req.params.id;
    const { option } = req.body;
    const poll = await Poll.findByPk(questionId);
    if (!poll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found.",
      });
    }


    const options = Array.isArray(poll.options)
      ? poll.options
      : JSON.parse(poll.options);

    const selectedOption = options.find((opt) => opt.text === option);
    if (!selectedOption) {
      return res.status(404).json({
        success: false,
        message: "Invalid option selected.",
      });
    }
    selectedOption.votes += 1;
    poll.changed("options", true);
    await poll.save();
    return res.json({
      success: true,
      poll,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while voting.",
    });
  }
};

const handleGetPolls = async (req, res) => {
  try {
    const polls = await Poll.findAll({
      attributes: ["id", "question"],
    });
    return res.json({
      success: true,
      polls,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while fetching polls.",
    });
  }
};

const handleGetPoll = async (req, res) => {
  try {
    const questionId = req.params.id;
    const poll = await Poll.findByPk(questionId);
    if (!poll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found.",
      });
    }
    return res.json({
      success: true,
      poll,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while fetching poll.",
    });
  }
};

module.exports = { handleAddVote, handleGetPolls, handleGetPoll };
