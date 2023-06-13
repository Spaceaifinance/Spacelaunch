import mongoose from "mongoose";

const Schema     = mongoose.Schema;

var AdminSchemaFormat = new Schema ({
    username:     { type: String},
    email:    { type: String , unique : true},
    password: { type: String},
    AccessToken: { type: String},
    level:    { type: String},
    lastLogin : { type: String, default: Date.now },
    updatedAt : { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('Admin', AdminSchemaFormat, 'Admin');