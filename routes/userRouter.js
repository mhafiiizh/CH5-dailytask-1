const router = require("express").Router();

const User = require("../controller/userController");

router.post("/", User.createUser);
router.get("/", User.findAllUser);

router.get("/:id", User.findUserById);
router.put("/:id", User.updateUser);
router.delete("/:id", User.deleteUser);

module.exports = router;
