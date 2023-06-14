import { get } from "mongoose";
import * as userhelper from "./Helper/userhelper";
import { kycdetails } from "./usercontroller";
import { createHash } from "crypto";
//Schema
import userschema from "../Models/user";
import trending from "../Models/trending";
import admin from "../Models/admin";
import coin from "../Models/coin";
import { UseToken } from "../Config/jwt";
import Createlaunch from "../Models/createlaunchpad";


export const ValidateAdminLogin = async (req, res) => {
  console.log("body" , req?.body,process.env.REFRESH_ACCESS_TOKEN_LIFE, process.env.REFRESH_ACCESS_TOKEN_KEY);
  const email = req.body.email;
  const password = req.body.password;
  var hashed = createHash('sha256').update(password).digest('hex');console.log("hashged" , hashed);
  var validate = await admin.findOne({email : email, password : hashed});console.log("validate" , validate);
  if (validate) {
          const accessToken = await UseToken({
              
              email: validate.email
          }, process.env.REFRESH_ACCESS_TOKEN_LIFE, process.env.REFRESH_ACCESS_TOKEN_KEY);
          let helperData = {
            tablename : admin,
            finddata : {email : validate.email},
            valuedata : {AccessToken : accessToken}
          }
          await userhelper.update(helperData).then(async () => {
                  res.json({
                      username: validate.username,
                      accessToken: accessToken,
                      email: validate.email,
                      success: true, 
                      data: `Welcome ${validate.username} !`,
                  });
              
          })
      
  } 
  else {
     res.json({
          success: false, data: "Invalid Credentials !"
      });
  }

}


// Approve kycdetails
// method : get
// status changed Pending to Approved

export const approvekyc = async(req , res) => {
    try{console.log("body" , req?.body);
      let helperData = {
        tablename : userschema,
        finddata : {walletaddress : req?.body?.walletaddress , "proof.id" : parseInt(req?.body?.id)},
        valuedata : {
          "proof.$.status" : "Approved"
        }
      }
      await userhelper.update(helperData).then((result)=>{
        console.log("result" , result);
        res.send(result);
      })
    }
    catch(e){
      console.log("error" , e);
    }
  }

  export const rejectkyc = async(req , res) => {
    try{
      let helperData = {
        tablename : userschema,
        finddata : {walletaddress : req?.body?.walletaddress , "proof.id" : parseInt(req?.body?.id)},
        valuedata : {
          "proof.$.status" : "Rejected"
        }
      }
      userhelper.update(helperData).then((result)=>{
        console.log("result" , result);
        res.send(result);
      })
    }
    catch(e){
      console.log("error" , e);
    }
  }

export const getallkyc = async(req , res) => {
  try{
    console.log("req?.query" , req?.query);
    let allkyc = await userschema.find({}, { "proof": { "$slice": -1 } }).sort({"createdAt":-1}).skip(req?.query?.skip).limit(req?.query?.limit);
    let count = await userschema.count({})
    // console.log("allkyc" , allkyc);
    res.json({type : "success" , "record" : allkyc , "count" : count});
  }
  catch(e){
    console.log("error" , e);
  }
}

export const getcoindata = async(req , res) => {
  try{
    const coins = await coin.findone({name : "coins"});
    res.json({type : "success" , record : coins});
  }
  catch(e){
    console.log("error" , e);
  }
}

export const addcoin = async(req , res) => {
  try{
    let coindata = await coin.findone({name : "coins"});
    let isexist = await coindata?.coins.includes(req?.body?.coin)
    if(!isexist){
      let helperdata = {
        tablename : coin,
        finddata : {name : "coins"},
        valuedata : {$push : {coins : req?.body?.coin}}
      }
      let updatedata = await userhelper.updatepush(helperdata);
      res.send(updatedata);
    }
    res.json({type : "success" , record : "Already exist"})
  }
  catch(e){
    console.log("error" , e);
  }
}

export const addtrending = async(req , res) => {
  try{
    let newdata = new trending({
      saleaddress : req?.body?.saleaddress,
      displayname : req?.body?.displayname,
      status : req?.body?.status,
      saletype : req?.body?.type,
      position : req?.body?.position,
      date : req?.body.date
    })
    let result = await newdata.save();
    res.json({type : "success" , data : result})
  }
  catch(e){
    console.log("error on add trending" , e);
  }
}

export const edittrending = async (req, res) => {
  let data = {
    saleaddress : req?.body?.saleaddress,
    displayname : req?.body?.displayname,
    status : req?.body?.status,
    saletype : req?.body?.type,
    position : req?.body?.position,
    date : req?.body.date
  }
  let updatedata = await trending.findOneAndUpdate({_id : req?.body?.id} , {$set:data})
  res.json({type : "success" , data : updatedata})
  
}

export const gettrending = async(req , res) => {
  try{
    let trendingsale = await trending.find({status : "Active"});
    res.json({type : "success" , data : trendingsale});
  }
  catch(e){
    console.log("error on get trending" , e);
  }
}

export const gettrendinginfo = async (req, res) => {
  try {
      const Trendingdata =  await trending.find({}).sort({createdAt : -1}).skip(req?.query?.skip).limit(req?.query?.limit);
      const count = await trending.count({});
      if (Trendingdata == "" || Trendingdata == null) {
          res.json({
              success: false, data: "Trending Info Does'nt Exists!"
          });
          return false;
      }
      res.json({
          success: true, data: Trendingdata , count : count
      });
      // res.send()
  } catch (e) {
      console.log("error", e);
  }
}

export const createdummylaunch = async(req , res) => {
  let tokeninfo = JSON.parse(req?.body?.tokeninfo)
  try{ console.log("body create dummy launch" , req?.body);
    var createdata = new Createlaunch({
      tokenaddress : req?.body?.tokenaddress,
      currency : req?.body?.currency,
      presaleRate : req?.body?.presalerate,
      whitelist : req?.body?.whitelist,
      softCap : req?.body?.softcap*10**18,
      hardCap : req?.body?.hardcap*10**18,
      minbuy : req?.body?.minbuy,
      maxbuy : req?.body?.maxbuy,
      listingoption : req?.body?.listingoption,
      lockingdays : req?.body?.lockingdays,
      listingrateperbnb : req?.body?.listingrateperbnb,
      pancakeswapliquidity : req?.body?.pancakeswapliquidity,
      startTime : req?.body?.starttime,
      endTime : req?.body?.enddate,
      logo : req?.body?.logourl,
      website : req?.body?.website,
      facebook : req?.body?.facebook,
      twitter : req?.body?.twitter,
      github : req?.body?.github,
      telegram : req?.body?.telegram,
      instagram : req?.body?.instagram,
      discord : req?.body?.discord,
      reddit : req?.body?.reddit,
      youtubevideo : req?.body?.youtubevideo,
      description : req?.body?.description,
      vestingperiod : req?.body?.vestingperiod,
      rewardpercent : req?.body?.rewardpercent,
      saleAddress : req?.body?.saleaddress,
      tokeninfo : JSON.parse(req?.body?.tokeninfo),
      name : tokeninfo.name ,
      symbol : tokeninfo.symbol,
      decimal : tokeninfo.decimals,
      _end : req?.body?.enddate,
      _isWhitelisted : req?.body?.whitelist == "privatesale" ? true : false,
      _launchpadType : req?.body?.whitelist == "fairlaunch" ? false : true,
      _name : tokeninfo.name,
      _sale : req?.body?.saleaddress,
      _start : req?.body?.starttime,
      tokeninfo : tokeninfo,

      participants : req?.body?.participants,
      LaunchpadType : req?.body?.whitelist == "fairlaunch" ? false : true,
      earnedCap : req?.body?.earnedcap* 10**18,
      minEthLimit : req?.body?.minbuy * 10**18,
      maxEthLimit : req?.body?.maxbuy * 10**18,
    });
    console.log("createdata" , createdata);
    let result = await createdata.save();
    res.json({
      type : "success",
      data : result
    })
  }
  catch(e){
    console.log("error on createdummy launch" , e);
  }
}

export const Editdummylaunch = async(req , res) => {
  try{
    let tokeninfo = JSON.parse(req?.body?.tokeninfo)
    var data = {
      tokenaddress : req?.body?.tokenaddress,
      currency : req?.body?.currency,
      presaleRate : req?.body?.presalerate,
      whitelist : req?.body?.whitelist,
      softCap : req?.body?.softcap*10**18,
      hardCap : req?.body?.hardcap*10**18,
      minbuy : req?.body?.minbuy,
      maxbuy : req?.body?.maxbuy,
      listingoption : req?.body?.listingoption,
      lockingdays : req?.body?.lockingdays,
      listingrateperbnb : req?.body?.listingrateperbnb,
      pancakeswapliquidity : req?.body?.pancakeswapliquidity,
      startTime : req?.body?.starttime,
      endTime : req?.body?.enddate,
      logo : req?.body?.logourl,
      website : req?.body?.website,
      facebook : req?.body?.facebook,
      twitter : req?.body?.twitter,
      github : req?.body?.github,
      telegram : req?.body?.telegram,
      instagram : req?.body?.instagram,
      discord : req?.body?.discord,
      reddit : req?.body?.reddit,
      
      youtubevideo : req?.body?.youtubevideo,
      description : req?.body?.description,
      vestingperiod : req?.body?.vestingperiod,
      rewardpercent : req?.body?.rewardpercent,
      saleAddress : req?.body?.saleaddress,
      // tokeninfo : JSON.parse(req?.body?.tokeninfo)
      name : tokeninfo.name,
      symbol : tokeninfo.symbol,
      decimal : tokeninfo.decimals,
      _end : req?.body?.enddate,
      _isWhitelisted : req?.body?.whitelist == "privatesale" ? true : false,
      _launchpadType : req?.body?.whitelist == "fairlaunch" ? false : true,
      _name : tokeninfo.name,
      _sale : req?.body?.saleaddress,
      _start : req?.body?.starttime,
      tokeninfo : tokeninfo,
      participants : req?.body?.participants,
      LaunchpadType : req?.body?.whitelist == "fairlaunch" ? false : true,
      earnedCap : req?.body?.earnedcap* 10**18,
      minEthLimit : req?.body?.minbuy * 10**18,
      maxEthLimit : req?.body?.maxbuy * 10**18,
    }
    console.log("edit daata" , data);
    let result = await Createlaunch.findOneAndUpdate({_id : req?.body?.id} , data);
    res.json({
      type : "success",
      data : result
    })
  }
  catch(e){
    console.log("error on createdummy launch" , e);
  }
}

export const Getdummylaunchpad = async(req , res) => {
  try{
    const launchpaddata = await Createlaunch.find({}).sort({createdAt : -1}).skip(req?.query?.skip).limit(req?.query?.limit);
    const count = await Createlaunch.count({});
    if (launchpaddata == "" || launchpaddata == null || !launchpaddata) {
      res.json({
          success: false, data: "Launchpad Info Does'nt Exists!"
      });
      return false;
    }
  res.json({
      success: true, data: launchpaddata , count : count
  });
  }
  catch(e){
    console.log("error on get dummy launchpad" , e);
  }
}




