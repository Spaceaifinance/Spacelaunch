import jwt from "jsonwebtoken"
import fs from "fs";

import userschema from "../Models/user";
import * as authenticate  from "../Config/jwt";
import * as userhelper from "./Helper/userhelper";
import { log } from "console";
import trending from "../Models/trending";
import sale from "../Models/sale";
import Createlaunch from "../Models/createlaunchpad";

// check jwt token
export const AuthendicateRequest = async(req,res,next) => {
  console.log("headers" , req?.headers?.authorization);
  var token = req.headers.authorization.split(' ')[1];
  console.log("token:",token,"req.headers.authorization:",req.headers.authorization);
 const validate =await authenticate.UseValidateToken(token,process.env.REFRESH_ACCESS_TOKEN_KEY);
 console.log("validate ; ",validate)
 if(!validate.isValid) {res.json({  success: false, data: "UnAuthorized Access !"}); return false; }
 if(validate.isExpired) {res.json({ success: false, data: "Token Expired !"}); return false; }
 next();
}

// store user kyc details
// method : post,
// input : walletaddress : String , idtype : String , front : img , back : img
export const kycdetails = async(req , res)=>{
    try{
      let walletaddress = req?.body?.walletaddress;
      //  walletaddress = walletaddress.toString().toLowerCase()
        console.log("body" , req?.body);
        let uploadfile=req?.files
        var image = Date.now();
        const folderpath = "/kyc/"+req?.body?.walletaddress+"/";
        const folpath = 'public/kyc/'+req?.body?.walletaddress;
        const frontpath = 'public/kyc/'+req?.body?.walletaddress+'/'+image+'.zip';
        // const backpath = 'public/kyc/'+req?.body?.walletaddress+'/'+image+'2.webp';
        // var img = uploadfile?.front && uploadfile?.back ?[image+"1.webp" , image+"2.webp"] : 
        //     !uploadfile?.front && !uploadfile?.back ? [] : ["front.webp"];
            var img = image+'.zip';
        
        await fs.mkdir(folpath , async function (err) {
          if (err) console.log("fol err" ,err);
          if (uploadfile) {
          {
              await uploadfile?.front.mv(frontpath , function (err, data) {
                if (err) 
                  console.log("error on file upload" , err);
              });
            //   await uploadfile?.back.mv(backpath , function (err, data) {
            //     if (err) 
            //       console.log("error on file upload" , err);
            // });
            }
          }
        })
        let user = await userschema.findOne({walletaddress : req.body.walletaddress});
        console.log("user" , user);
        
        if(user?.proof?.length == 0){
          var wallet = req?.body?.walletaddress;
          wallet = wallet.toString();
          // let data = new userschema({
          //   walletaddress :  wallet.toLowerCase(),
           var proof = [{
              id : 1,
              idtype : req?.body?.idtype,
              image :img,
              path : folpath,
              idnumber : req?.body?.idnumber,
              address : req?.body?.address,
              status : "Pending"
            }]
          // });

          var result = await userschema.findOneAndUpdate({'walletaddress' : req?.body?.walletaddress} , 
            {$set : {proof : proof}})
            res.send(result);
          // userhelper.save(data).then((result)=>{
          //   console.log("res" , result);
          //   res.send(result);
          // })
        }
        else{

          var data = {
            id : user?.proof?.length +1,
            idtype : req?.body?.idtype,
            image :img,
            path : folderpath,
            idnumber : req?.body?.idnumber,
            address : req?.body?.address,
            status : "Pending"
          }
          let helperData = {
            tablename : userschema,
            finddata : {'walletaddress' : req?.body?.walletaddress},
            valuedata : {$push: {proof : data}}
          }
          let result = await userhelper.updatepush(helperData);
          res.send(result);
        }
    }
    catch(e){
      console.log("error on kyc details" , e);
    }
}

export const singleuserkyc = async(req , res) => {
  try{
    console.log("params" , req?.query?.walletaddress);
    let userkyc = await userschema.findOne({"walletaddress" : req?.query?.walletaddress});
    console.log("userkyc" , userkyc);
    if(userkyc){
      let kycdetail = userkyc?.proof[userkyc?.proof?.length - 1]
      return res.json({"type" : "success" , "record" : kycdetail})
    }
    else{
      return res.json({"type" : "nodata" , "record" : ""})
    }
  }
  catch(e){
    console.log("error" , e);
  }
}

// export const wishlist = async(req , res) => {export const Getcreatelaunch = async(req , res) => {
//   try{
//     let data = await Createlaunch.find({});
//     res.json({
//       type : "success" , 
//       result : data
//     })
//   }
//   catch(e){
//     console.log("error on getcreatelaunchp" , e);
//   }
// }

export const wishlist = async(req , res) => {
  try{
    console.log("body" , req?.body);
    let userwishlist = await userschema.findOne({walletaddress : req?.body?.walletaddress});
    // console.log("user" , userwishlist);
    if(userwishlist){
     let userwishlistarray = await userwishlist.wishlist.includes(req?.body?.saleaddress);
     console.log("userwishlist" , userwishlistarray);
     if(userwishlistarray){
      let update = await userschema.findOneAndUpdate({walletaddress : req?.body?.walletaddress} , 
        {$pull:{wishlist : req?.body?.saleaddress}})
        res.json({type : "success" , data : update}) 
     }
     else{
      let update = await userschema.findOneAndUpdate({walletaddress : req?.body?.walletaddress} , 
        {$push:{wishlist : req?.body?.saleaddress}}  
      )
      console.log("update" , update);
      res.json({type : "success" , data : update})
     }
    }
  }
  catch(e){
    console.log("e" , e);
  }
}


export const viewlist = async(req , res) =>{
  try{console.log("body" , req?.body);
    let userviewlist = await userschema.findOne({walletaddress : req?.body?.walletaddress});
    if(userviewlist?.viewlist){
      let viewlistarray = await userviewlist.viewlist.includes(req?.body?.saleaddress);
      console.log("viewlistarray" , viewlistarray);
      if(!viewlistarray){
        let update = await userschema.findOneAndUpdate({walletaddress : req?.body?.walletaddress},
          {$push : {viewlist : req?.body?.saleaddress}}
          )
        res.json({type : "success" , data : update})
      }
      else{
        res.json({type : "success" , data : "already viewed"})
      }
    }
  }
  catch(e){
    console.log("e" , e);
  }
}

export const getuserdata = async(req , res) => {
  try{
    console.log("body" , req?.body);
    let user = await userschema.findOne({walletaddress : req?.body?.walletaddress});
    console.log("user" , user);
    if(user){
      res.json({type : "success" , data : user})
    }else{
      let data = new userschema({
        walletaddress : req.body.walletaddress
      })
      console.log("user mongo sdata" , data);
      data.save().then((data)=>{
        res.json({type : "success" , data : data})
      }).catch((e)=>{
        console.log("Monog error ;' ",e)
      //  res.json({type : "failed" , data : e})
      })
    }
   
  }
  catch(e){
    console.log("error" ,e);
  }
}


export const userinvested = async(req , res) => {
  try{
    let user = await userschema.findOne({walletaddress : req?.body?.walletaddress});
    let investedamount = parseFloat(user.investedamount) + parseFloat(req?.body?.amount);
    // console.log("user" , user , user.investedpools.length);

    let investedpool = user.investedpools;
    if(!investedpool.includes(req?.body?.saleaddress)){
      investedpool.push(req?.body?.saleaddress);
      let update = await userschema.findOneAndUpdate({walletaddress : req?.body?.walletaddress},
      {$set : {investedpools : investedpool , investedamount : investedamount.toString()}}
      )
      res.json({type : "success" , data : update});
    }
    else{
      let update = await userschema.findOneAndUpdate({walletaddress : req?.body?.walletaddress},
        {$set : { investedamount : investedamount.toString()}}
        )
        res.json({type : "success" , data : update});
    }
    // res.json({type : "success" , data : "already uipdated"});
  }
  catch(e){
    console.log("e" , e);
  }
}


export const userlaunchpad = async(req , res) => {
  try{
    let update = await userschema.findOneAndUpdate({walletaddress : req?.body?.walletaddress},
    {$push:{launchpad : {saleaddress : req?.body?.saleaddress  , iswhitelist : req?.body?.whitelist}}}
    );
    let result = await Newsale(req?.body?.saleaddress);
    res.json({type : "success" , data : result});
  }
 catch(e){
  console.log("e" , e);
 }
}

export const updatelaunchpad = async(req , res) => {
  try{
    let update = await sale.findOneAndUpdate({_id : req?.body?.id} , {saleaddress : req?.body?.saleaddress})
    res.json({type : "success" , data : update});
  }
 catch(e){
  console.log("e" , e);
 }
}


export const addnewuser = async(req , res) => {
  try{
    console.log("body" , req?.body);
    let user = await userschema.findOne({walletaddress : req.body.walletaddress});
    console.log("user" , user);
    if(!user){
      console.log("new data called !" );
      let data = new userschema({
        walletaddress : req.body.walletaddress
      })
      console.log("new data called !" );
      console.log("new data" , data);
      let newuser = await data.save();
      res.json({type : "success" , result : newuser})
    }
    else{
      res.json({type : "success" , result : "Already registered"});
    }
  }
  catch(e){
    console.log("e" , e);
  }
}

// export const gettrending = async(req , res) => {
//   try{
//     let trendingsale = await trending.find({status : "Active"});
//     res.json({type : "success" , data : trendingsale});
//   }
//   catch(e){
//     console.log("error on get trending" , e);
//   }
// }

export const gettrending = async(req , res) => {
  try{
    let trendingsale = await trending.find({"date" : { $gte : Date.now() } ,
        status : "Active"}).sort({position : 1});
    res.json({type : "success" , data : trendingsale});
  }
  catch(e){
    console.log("error on get trending" , e);
  }
}

export const homecalculation = async(req , res) => {
  try{
    let totalbnbraised = await userschema.aggregate([
      { "$group": { "_id" : "Invested" , "sum" : { "$sum": "$investedamount" } } }]);

  let usercount = await userschema.count();
      res.json({"status" : "success" , totalbnb : totalbnbraised[0].sum , user : usercount})
  }
  catch(e){
    console.log("error on home calculation" , e);
  }
}


const Newsale = async(saleaddresss) => {
  try{
    let data = new sale({
      saleaddress : saleaddresss,
    });
    let result = await data.save();
    return result;
  }
  catch(e){
    console.log("error in new sale" , e);
  }
}

export const Getsale = async(req , res) => {
  try{console.log("getsale controler" , req?.query);
    let sales = await sale.find({}).skip(req?.query?.skip).limit(req?.query?.limit);
    let count = await sale.count({});
    console.log("sales" , sales);
    res.json({success : true , data : sales , count : count})
  }
  catch(e){
    console.log("error in get sale" , e);
  }
}

export const addkycaudit = async(req , res) => {
  try{
    console.log("add kyc audit body" , req?.body);
    let update = await sale.findOneAndUpdate({_id : req?.body?.id},
        {audit : req?.body?.audit , kyc : req?.body?.kyc , status : req?.body?.status} 
      );
      console.log("update" , update);
      res.json({type : "success" , result : update})
  }
  catch(e){
    console.log("error on add kyc" , e);
  }
}

// export const editkycaudit = async(req , res) => {
//   try{
//     let update = await sale.findOneAndUpdate({_id : req?.body?.id},
//         {audit : req?.body?.audit , kyc : req?.body?.kyc} 
//       );
//       res.json = {type : "success" , result : update}
//   }
//   catch(e){
//     console.log("error on add kyc" , e);
//   }
// }


export const Getallsale = async(req , res) => {
  try{console.log("getsale controler" , req?.query);
    let sales = await sale.find({status : "Active"});
    // let count = await sale.count({});
    console.log("sales" , sales);
    res.json({success : true , data : sales})
  }
  catch(e){
    console.log("error in get sale" , e);
  }
}


// export const Getcreatelaunch = async(req , res) => {
//   try{
//     let data = await Createlaunch.find({});
//     res.json({
//       type : "success" , 
//       result : data
//     })
//   }
//   catch(e){
//     console.log("error on getcreatelaunchp" , e);
//   }
// }

export const getusecreatedlaunch = async(req , res) => {
  try{
    const launchpaddata = await Createlaunch.find({}).sort({createdAt : -1});
    if(launchpaddata && launchpaddata?.length > 0){
      res.json({type : "success" , data : launchpaddata});
    }
    else{
      res.json({type : "failure" , data : "No data found!"});
    }
  }
  catch(e){
    console.log("error on get use created launch" , e);
    res.json({type : "error" , data : e})
  }
}

