const mongoose=require('mongoose');

const registrationschmea=new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    event:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"event",
        required:true
    }
});


const registrationmodel = mongoose.model("registration",registrationschmea)


module.exports= registrationmodel