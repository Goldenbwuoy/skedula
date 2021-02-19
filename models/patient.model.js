const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    trim: true,
    required: "First Name is required",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name is required",
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: "Last name is required",
  },
});

module.exports = mongoose.model("Patient", PatientSchema);
