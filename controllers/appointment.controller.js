const Appointment = require("../models/appointment.model");
const errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  let appointment = {
    doctor: req.doctor_profile,
    patient: req.profile,
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

const appointmentsByPatient = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      "patient.account": req.profile.account,
    });
    return res.status(200).json(appointments);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const appointmentsByDoctor = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      "doctor.account": req.profile.account,
    });
    return res.status(200).json(appointments);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create, appointmentsByPatient, appointmentsByDoctor };
