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


module.exports = { createevent }