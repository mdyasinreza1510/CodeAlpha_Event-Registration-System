const express = require ('express');
const authRoutes= require ('./routes/auth.route')

const eventRoutes=require("./routes/event.route")

const registrationRoutes = require("./routes/registration.route");




const app = express();

app.use(express.json());







        //api defination
app.use("/api/auth/",authRoutes);

app.use("/api/event/",eventRoutes)

app.use("/api/register",registrationRoutes)





module.exports = app