import mongoose from "mongoose";

const Schema     = mongoose.Schema;

var TrendingchemaFormat = new Schema({
   saleaddress : {type : String},
   displayname : {type : String},
   status : {type : String},
   saletype : {type : String},
   position : {type : String},
   date : {type : String}
},{timestamps : true});
module.exports = mongoose.model('trending', TrendingchemaFormat, 'trending');