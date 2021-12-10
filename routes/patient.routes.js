const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const patientCtrl = require("../controllers/patient.controller");
const authCtrl = require("../controllers/auth.controller");

router
  .route("/api/patients")
  .post(userCtrl.create, patientCtrl.create)
  .get(patientCtrl.list);

router
  .route("/api/patients/:patientId")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasPatientAuthorization,
    patientCtrl.read
  );

router
  .route("/api/patients/:patientAccount/profile")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    patientCtrl.readByAccount
  );

router.param("patientId", patientCtrl.patientById);
router.param("patientAccount", patientCtrl.patientByAccount);
module.exports = router;
