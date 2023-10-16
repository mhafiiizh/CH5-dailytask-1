const router = require("express").Router();

const Shop = require("../controller/shopController");

// const checkOwnership = require("../middlewares/checkOwnership");
// const autentikasi = require("../middlewares/authenticate");

router.get("/", Shop.findShop);
router.post("/", Shop.createShop);

router.get("/:id", Shop.findShopById);
router.put("/:id", Shop.updateShop);
router.delete("/:id", Shop.deleteShop);

module.exports = router;
