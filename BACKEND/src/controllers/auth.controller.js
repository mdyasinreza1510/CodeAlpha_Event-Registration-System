const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");


async function registeruser(req, res) {
    try {
        const { name, email, password } = req.body;


        const userAlreadyExist = await usermodel.findOne({ email });
        if (userAlreadyExist) {
            return res.status(400).json({
                messege: "USER ALREADY EXIST!!!!!!"
            })
        }
        //IF ITS NEW RUSER THEN WE WILL HASH THIER PASSSSS
        const hashed = await bcrypt.hash(password, 10);

        //now ell create the user

        const user = await usermodel.create({
            name,
            email,
            password: hashed,
        })

        res.status(201).json({
            messege: "USER REGISTERED SUCESSFULLY",
            user:
            {
                id: user._id,
                name: user.name,
                email: user.email,

            }
        })



    } catch (err) {
        res.status(500).json({
            message: err.message,
        });


    }
}


module.exports = {registeruser};