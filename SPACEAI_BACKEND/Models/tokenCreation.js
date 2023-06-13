import mongoose from "mongoose";

const ToekenSchema = new mongoose.Schema({
    useraddress : {
        type : String,
        default : ""
    },
    tokenaddress : {
        type :String,
        default : ""
    },
    name : {
        type : String,
        default : ""
    },
    symbol : {
        type : String,
        default : ""
    },
    decimal : {
        type : String,
        default : ""
    },
    type : {
        type : String,
        default : ""
    }
} , {timestamps : true});

module.exports = mongoose.model("tokenCreation" , ToekenSchema);