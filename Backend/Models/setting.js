import mongoose from "mongoose";

const Schema     = mongoose.Schema;

var SettingschemaFormat = new Schema({
    settingname: { type : String},
    settingvalue: { type: String},
    
},{timestamps : true});
module.exports = mongoose.model('Setting', SettingschemaFormat, 'Setting');