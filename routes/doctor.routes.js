const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const doctorCtrl = require("../controllers/doctor.controller");
const authCtrl = require("../controllers/auth.controller");

router
  .route("/api/doctors")
  .post(userCtrl.create, doctorCtrl.create)
  .get(doctorCtrl.list);

router
  .route("/api/doctors/:doctorAccount/profile")
  .get(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    doctorCtrl.readByAccount
  );

router
  .route("/api/doctors/:doctorId/activate")
  .post(
    authCtrl.requireSignin,
    authCtrl.hasDoctorAuthorization,
    doctorCtrl.addInfo /**TODO: Notify admin */
  );

router.param("doctorId", doctorCtrl.doctorById);
router.param("doctorAccount", doctorCtrl.doctorByAccount);

module.exports = router;
