const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
  },
  role: {
    type: String,
    enum: ["Doctor", "Patient"],
    required: "Role is required",
  },
});

module.exports = mongoose.model("User", UserSchema);
