require("dotenv").config();
const app = require("./express");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_LOCAL_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to mongo")
);
mongoose.connection.on("error", () => {
  throw new Error(
    `Unable to connect to database: ${process.env.MONGODB_LOCAL_URI}`
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on Port ${PORT}`);
});
