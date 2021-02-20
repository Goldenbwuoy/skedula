const Appointment = require("../models/appointment.model");
const errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  let appointment = {
    doctor: req.doctor_profile.account,
    patient: req.profile.account,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  };
  try {
    const newAppointment = new Appointment(appointment);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment posted" });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create };
