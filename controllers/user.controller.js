const User = require("../models/user.model");
const errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res, next) => {
  const { email, password, role } = req.body;
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
