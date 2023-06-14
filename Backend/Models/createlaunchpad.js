import mongoose from "mongoose";

const createlaunchpadSchema = new mongoose.Schema({
    tokenaddress : {
        type : String,
        default : ""
    },
    currency : {
        type : String,
        default : ""
    },
    presaleRate : {
        type : String,
        default : ""
    },
    whitelist : {
        type : String,
        default : ""
    },
    softCap : {
        type : String,
        default : ""
    },
    hardCap : {
        type : String,
        default : ""
    },
    minbuy : {
        type : String,
        default : ""
    },
    maxbuy : {
        type : String,
        default : ""
    },
    listingoption : {
        type : Boolean,
        default : null
    },
    lockingdays : {
        type : String,
        default : ""
    },
    listingrateperbnb : {
        type : String,
        default : ""
    },
    pancakeswapliquidity : {
        type : String,
        default : ""
    },
    startTime : {
        type : String,
        default : ""
    },
    endTime : {
        type : String,
        default : ""
    },
    logo : {
        type : String,
        default : ""
    },
    website : {
        type : String,
        default : ""
    },
    facebook : {
        type : String ,
        default : ""
    },
    twitter : {
        type : String ,
        default : ""
    },
    github : {
        type : String ,
        default : ""
    },
    telegram : {
        type : String ,
        default : ""
    },
    instagram : {
        type : String ,
        default : ""
    },
    discord : {
        type : String ,
        default : ""
    },
    reddit : {
        type : String ,
        default : ""
    },
    facebook : {
        type : String ,
        default : ""
    },
    youtubevideo : {
        type : String,
        default : ""
    },
    description : {
        type : String,
        default : ""
    },
    vestingperiod : {
        type : String,
        default : ""
    },
    rewardpercent : {
        type : String,
        default : ""
    },
    saleAddress : {
        type : String,
        default : ""
    },
    // tokeninfo : {
    //     type : Object,
    //     default : {}
    // }
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
    _end : {
        type : String,
        default : ""
    },
    _isWhitelisted : {
        type : Boolean,
        default : null
    },
    _launchpadType : {
        type : Boolean,
        default : null
    },
    _name : {
        type : String,
        default : ""
    },
    _sale :{
        type : String,
        default : ""
    },
    _start : {
        type : String,
        default : ""
    },
    isdb : {
        type : Boolean,
        default : true
    },
    earnedCap : {
        type : String,
        default : ""
    },
    lpUnlockon : {
        type : String,
        default : ""
    },
    tokeninfo : {
        type : Object,
        default : {}
    },
    buytype : {
        type : Boolean,
        default : true
    },

    LaunchpadType : {
        type : Boolean,
        default : null
    },
    earnedCap : {
        type : String,
        default : ""
    },
    isClaimable : {
        type : Boolean,
        default : false
    },
    isPancake : {
        type : Boolean,
        default : false
    },
    isPresaleOpen : {
        type : Boolean ,
        default : true
    },
    isToken : {
        type : Boolean,
        default : false
    },
    isVested : {
        type : Boolean,
        default : false
    },
    isWhitelisted : {
        type : Boolean,
        default : false
    },
    isWithoutToken : {
        type : Boolean,
        default : false
    },
    liquidityPercent : {
        type : String,
        default : "0"
    },
    maxEthLimit : {
        type : String,
        default : ""
    },
    minEthLimit : {
        type : String,
        default : ""
    },
    pancakeRate : {
        type : String,
        default : "0"
    },
    participants : {
        type : String,
        default : ""
    },
    useWithToken : {
        type : String,
        default : "0x0000000000000000000000000000000000000000"
    },
    vestingInterval : {
        type : String,
        default : "0"
    },
    vestingPercent : {
        type : String,
        default : "0"
    }

} , {timestamps : true});

module.exports = mongoose.model("createlaunchpadSchema" , createlaunchpadSchema);

// isPancake