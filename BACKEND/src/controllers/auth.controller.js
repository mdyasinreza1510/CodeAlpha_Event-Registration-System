const usermodel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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






async function loginuser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.status(401).json({ messege: "USER NOT FOUND" })
        }

        const ismatch = await bcrypt.compare(password, user.password);

        if (!ismatch) {
            return res.status(400).json({ messege: "invalid credentials" })
        }


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(200).json({
            message: "Login successful",
            token,
        });


    }
    catch (err) 
    {
            res.status(500).json({
            message: err.message,
    });
    }
}

module.exports = { registeruser,loginuser }