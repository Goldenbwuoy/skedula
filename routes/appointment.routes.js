const router = require("express").Router();
const appointmentCtrl = require("../controllers/appointment.controller");
const authCtrl = require("../controllers/auth.controller");
const patientCtrl = require("../controllers/patient.controller");
const doctorCtrl = require("../controllers/doctor.controller");

router
  .route("/api/appointment/by/:patientAccount/with/:doctorId")
  .post(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    appointmentCtrl.create
  );

router
  .route("/api/appointments/patient/:patientAccount")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    appointmentCtrl.appointmentsByPatient
  );

router
  .route("/api/appointments/doctor/:doctorAccount")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    appointmentCtrl.appointmentsByDoctor
  );

router.param("patientAccount", patientCtrl.patientByAccount);
router.param("doctorAccount", doctorCtrl.doctorByAccount);
router.param("doctorId", doctorCtrl.doctorById);

module.exports = router;
