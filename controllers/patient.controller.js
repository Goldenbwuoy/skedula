const Patient = require("../models/patient.model");
const errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  console.log(req.body);
  const patient = new Patient(req.body);
  try {
    const savedPatient = await patient.save();
    return res.status(200).json(savedPatient);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const patientByAccount = async (req, res, next, accountId) => {
  try {
    let patient = await Patient.findOne({ account: accountId });
    if (!patient) {
      return res.status(400).json({
        error: "Patient not found",
      });
    }
    req.profile = patient;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve patient",
    });
  }
};

const read = async (req, res) => {
  try {
    req.profile.password = undefined;
    return res.status(200).json(req.profile);
  } catch (err) {}
};

const list = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create, patientByAccount, read, list };
