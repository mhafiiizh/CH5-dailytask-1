const router = require("express").Router();

const Auth = require("../controller/authController");
const autenthicate = require("../middlewares/authenticate");

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.get("/me", autenthicate, Auth.checkToken);

module.exports = router;
