const express = require("express");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const patientRoutes = require("./routes/patient.routes");
const doctorRoutes = require("./routes/doctor.routes");
const authRoutes = require("./routes/auth.routes");
const appointmentRoutes = require("./routes/appointment.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/", patientRoutes);
app.use("/", doctorRoutes);
app.use("/", authRoutes);
app.use("/", appointmentRoutes);

/* To handle auth-related errors thrown by express-jwt when it tries to validate JWT
tokens in incoming requests */
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
  }
});

module.exports = app;
