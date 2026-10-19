const eventmodel = require('../models/event.model')
const jwt = require('jsonwebtoken');

async function createevent(req, res) {

    try {
        const token = req.headers.authorization.split(" ")[1];//after login put your token inside the bearer token in authorization section.(postman)

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { title, description, date, location, capacity } = req.body;

        const event = await eventmodel.create({
            title,
            description,
            date,
            location,
            capacity,
            organizer: decoded.id,
        })

        res.status(201).json(
            {
                mesege: "EVENT CREATED SUCESSFULLY",
                title,
                description,
                date,
                location,
                capacity,
                organizer: decoded.id,

            })


    }

    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }


}




async function getevent(req, res) {

    try {
        const events = await eventmodel.find().populate("organizer", "name email");

        res.status(200).json({
            messege: "EVENT FETCHED SYCESSFULLY", events

        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }

}





async function getEventById (req, res){
    try {
        const { id } = req.params;

        const event = await eventmodel
            .findById(id)
            .populate("organizer", "name email");

        if (!event) {
            return res.status(404).json({
                message: "Event not found",
            });
        }

        res.status(200).json({
            message: "Event fetched successfully",
            event,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};






async function deleteevent(req,res){
  try {
    const { id } = req.params;

    const event = await eventmodel.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};







module.exports = { createevent, getevent,getEventById, deleteevent}