const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const doctorCtrl = require("../controllers/doctor.controller");

router.route("/api/doctors").post(userCtrl.create, doctorCtrl.create);

module.exports = router;
