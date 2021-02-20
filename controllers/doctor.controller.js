const Doctor = require("../models/doctor.model");
const errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  const doctor = new Doctor(req.body);
  try {
    const savedDoctor = await doctor.save();
    return res.status(200).json(savedDoctor);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const doctorByAccount = async (req, res, next, accountId) => {
  try {
    let doctor = await Doctor.findOne({ account: accountId });
    if (!doctor) {
      return res.status(400).json({
        error: "Doctor not found",
      });
    }
    req.profile = doctor;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve doctor",
    });
  }
};

const read = async (req, res) => {
  try {
    return res.status(200).json(req.profile);
  } catch (err) {}
};

const list = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create, doctorByAccount, read, list };
