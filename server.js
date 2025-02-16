require("dotenv").config()
const app = require("./src/app")


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.warn(`Server is listening on port ${PORT}`);
});
