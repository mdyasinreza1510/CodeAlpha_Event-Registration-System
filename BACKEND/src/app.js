const express = require ('express');
const authRoutes= require ('./routes/auth.route')

const eventRoutes=require("./routes/event.route")




const app = express();

app.use(express.json());







        //api defination
app.use("/api/auth/",authRoutes);

app.use("/api/event/",eventRoutes)





module.exports = app