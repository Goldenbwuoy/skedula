const router = require("express").Router();
const authCtrl = require("../controllers/auth.controller");
const userCtrl = require("../controllers/user.controller");

router.route("/api/signin").post(authCtrl.signin);

router.route("/api/users").get(userCtrl.list);

module.exports = router;
