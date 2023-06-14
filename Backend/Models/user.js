import mongoose from "mongoose";

var userschema = new mongoose.Schema({
    walletaddress : {
        type : String,
        unique : true,
        required : true
    },
    proof : {
        type : Array
    },
    wishlist : {
        type : Array,
        default : []
    },
    viewlist : {
        type : Array,
        default : []
    },
    investedpools : {
        type : Array,
        default : []
    },
    investedamount : {
        type : Number,
        default : 0
    },
    launchpad :{
        type : Array,
        default : []
    }
},{timestamps : true});
module.exports = mongoose.model("userschema" , userschema , "userschema");