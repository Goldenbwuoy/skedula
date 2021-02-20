const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const doctorCtrl = require("../controllers/doctor.controller");
const authCtrl = require("../controllers/auth.controller");

router
  .route("/api/doctors")
  .post(userCtrl.create, doctorCtrl.create)
  .get(doctorCtrl.list);

router
  .route("/api/doctors/:accountId")
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, doctorCtrl.read);

router.param("accountId", doctorCtrl.doctorByAccount);

module.exports = router;
