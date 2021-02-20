const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const patientCtrl = require("../controllers/patient.controller");
const authCtrl = require("../controllers/auth.controller");

router
  .route("/api/patients")
  .post(userCtrl.create, patientCtrl.create)
  .get(patientCtrl.list);

router
  .route("/api/patients/:accountId")
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, patientCtrl.read);

router.param("accountId", patientCtrl.patientByAccount);
module.exports = router;
