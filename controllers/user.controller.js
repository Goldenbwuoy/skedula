const User = require("../models/user.model");
const errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    practice_number,
    password,
    role,
  } = req.body;
  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    return res.status(400).json({ error: "Please fill in all fields!" });
  }
  if (role == "Doctor" && !practice_number) {
    return res.status(400).json({ error: "Practice Number is required" });
  }
  const user = new User({ email, password, role });
  try {
    const savedUser = await user.save();
    req.body.account = savedUser;
    next();
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create };
