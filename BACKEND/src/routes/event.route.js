const express=require('express');
const eventcontroller= require("../controllers/event.controller");

const router= express.Router();


router.post("/create",eventcontroller.createevent);







module.exports= router;