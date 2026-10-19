const express = require("express");

const registrationcontroller = require("../controllers/registration.controller");

const router = express.Router();

router.post("/:eventId", registrationcontroller.registerEvent);

module.exports = router;