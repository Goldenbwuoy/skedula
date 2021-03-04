const Appointment = require("../models/appointment.model");
const errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  let appointment = req.body;
  appointment.doctor = req.doctor_profile;
  appointment.patient = req.patient_profile;

  const newAppointment = new Appointment(appointment);
  try {
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const appointmentsByPatient = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      patient: req.patient_profile._id,
    }).populate("doctor", "_id firstName lastName");
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
      doctor: req.doctor_profile._id,
    }).populate("patient", "_id firstName lastName");
    return res.status(200).json(appointments);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create, appointmentsByPatient, appointmentsByDoctor };
