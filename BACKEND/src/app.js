const express = require ('express');
const authRoutes= require ('./routes/auth.route')




const app = express();

app.use(express.json());







        //api defination
app.use("/api/auth/",authRoutes);





module.exports = app