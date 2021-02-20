const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
  },
  start_time: {
    type: Date,
    required: "Appointment start time is required",
  },
  end_time: {
    type: Date,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
