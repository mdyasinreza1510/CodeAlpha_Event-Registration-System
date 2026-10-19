const express = require("express");

const registrationController = require("../controllers/registration.controller");

const router = express.Router();

router.post("/:eventId", registrationController.registerEvent);

module.exports = router;