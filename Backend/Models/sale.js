import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
    saleaddress : {
        type : String,
        default : ""
    },
    audit : {
        type :String,
        default : ""
    },
    kyc : {
        type : String,
        default : ""
    },
    status : {
        type : String,
        default : ""
    }
} , {timestamps : true});

module.exports = mongoose.model("sales" , saleSchema);