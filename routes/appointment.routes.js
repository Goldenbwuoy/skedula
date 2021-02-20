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

router.param("patientAccount", patientCtrl.patientByAccount);
router.param("doctorId", doctorCtrl.doctorById);

module.exports = router;
