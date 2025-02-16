require("dotenv").config()
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const pollRouter = require("./routers/poll.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api/poll", pollRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.warn(`Server is listening on port ${PORT}`);
});
