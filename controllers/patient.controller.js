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

module.exports = { create };
