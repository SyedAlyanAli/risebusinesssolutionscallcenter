const express = require("express");
const router = express.Router();

const { register, login, getalluser } = require("./../controller/user");

router.post("/register", register);
router.post("/login", login);
router.get("/getalluser", getalluser);
module.exports = router;
