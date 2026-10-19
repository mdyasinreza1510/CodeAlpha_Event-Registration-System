const express=require('express');
const eventcontroller= require("../controllers/event.controller");

const router= express.Router();


router.post("/create",eventcontroller.createevent);

router.get("/allevents", eventcontroller.getevent)


router.get("/:id",eventcontroller.getEventById)//search event by id

router.patch("/:id",eventcontroller.updateEvent);

router.delete("/:id",eventcontroller.deleteevent);





module.exports= router;