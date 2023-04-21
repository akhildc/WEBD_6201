const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// Schema for the database
const AnimalSchema = new Schema({
    zoo:{
        type:String,
        required: true
    },
    scientificName:{
        type:String,
        required: true
    },
    commonName:{
        type:String,
        required: true
    },
    givenName:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    dob:{
        type:Date,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    isTransportable:{
        type:Boolean,
        required: true
    }

})
//Exporting database schema
const Animal = mongoose.model("Animal",AnimalSchema)
module.exports = Animal;



