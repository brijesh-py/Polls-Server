
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const pollRouter = require("./routers/poll.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api/poll", pollRouter);
module.exports = app