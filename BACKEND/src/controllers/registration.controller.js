const registrationModel = require("../models/registration.model");
const jwt = require("jsonwebtoken");

async function registerEvent(req, res) {

    try 
    {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {eventId} = req.params;

        const registration=await registrationModel.create({
            user: decoded.id,
            event:eventId
        })

        res.status(201).json({messege:"EVENT REGISTERD !!",registration})
    }

    catch (err) 
    
    {
            res.status(500).json({
      message: err.message,
    });
    }



}

module.exports={registerEvent}