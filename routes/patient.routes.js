const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const patientCtrl = require("../controllers/patient.controller");

router.route("/api/patients").post(userCtrl.create, patientCtrl.create);

module.exports = router;
