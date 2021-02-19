require("dotenv").config();
const app = require("./express");

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on Port ${PORT}`);
});
