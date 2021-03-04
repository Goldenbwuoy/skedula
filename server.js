require("dotenv").config();
const app = require("./express");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_LOCAL_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Connected to mongo");
  } catch (err) {
    console.log(err);
  }
};
connectMongo();
// mongoose.connect(
//   process.env.MONGODB_REMOTE_URI,
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   },
//   () => console.log("Connected to mongo")
// );
// mongoose.connection.on("error", () => {
//   throw new Error(
//     `Unable to connect to database: ${process.env.MONGODB_REMOTE_URI}`
//   );
// });

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on Port ${PORT}`);
});
