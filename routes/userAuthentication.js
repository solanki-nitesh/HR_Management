const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");

router.get("/", UserController.find);
router.get("/:id", UserController.findOne);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router;