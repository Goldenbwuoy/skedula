const router = require("express").Router();
const authCtrl = require("../controllers/auth.controller");

router.route("/api/signin").post(authCtrl.signin);

module.exports = router;
