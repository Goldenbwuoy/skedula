const router = require("express").Router();
const appointmentCtrl = require("../controllers/appointment.controller");
const authCtrl = require("../controllers/auth.controller");
const patientCtrl = require("../controllers/patient.controller");
const doctorCtrl = require("../controllers/doctor.controller");

router
  .route("/api/appointment/by/:patientId/with/:doctorId")
  .post(
    authCtrl.requireSignin,
    authCtrl.hasPatientAuthorization,
    appointmentCtrl.create
  );

router
  .route("/api/appointments/patient/:patientId")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasPatientAuthorization,
    appointmentCtrl.appointmentsByPatient
  );

router
  .route("/api/appointments/doctor/:doctorId")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasDoctorAuthorization,
    appointmentCtrl.appointmentsByDoctor
  );

router.param("patientId", patientCtrl.patientById);
router.param("doctorId", doctorCtrl.doctorById);
router.param("doctorId", doctorCtrl.doctorById);

module.exports = router;
