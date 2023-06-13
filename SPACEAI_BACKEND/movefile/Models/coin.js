import mongoose from "mongoose";

const coinschema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    },
    coins : {
        type : Array,
        default : []
    }
},{timestamps : true});

module.exports = mongoose.model("coin" , coinschema)