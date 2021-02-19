const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ error: "User not found" });

    const authenticated = await user.authenticate(req.body.password);
    if (!authenticated) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ error: "Could not sign in" });
  }
};

module.exports = { signin };
