const mongoose=require('mongoose')

const eventschema= new mongoose.Schema({
    title:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        required:true
    },
    location:
     {
        type:String,
        required:true
    },
    capacity:
     {
        type:Number,
        required:true
    },
    organizer:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

});


const eventmodel= mongoose.model("event",eventschema);

module.exports=eventmodel;
