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

module.exports = { create };
