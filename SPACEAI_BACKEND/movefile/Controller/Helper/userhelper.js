import mongoose from "mongoose";

export const save = async(data) => {
    let res;
    try 
    {
        let dbsavedata = await data.save();
        console.log("sucessfully uploaded data >>>>>>>>>" , dbsavedata);
        res = {
            type : "success",
            data : dbsavedata
        }        
    }
    catch(e)
    {
        if(e.name == 'MongoServerError' && e.code == 11000)
        {
            console.log("mongo error");
            res = {
                type : 'error',
                data : 'mongo error : E11000 duplicate key error collection , field : email'
            }
        }
        else
        {
            console.log("fail to save data >>>>>>>>>>>" , e);
            res = {
                type : "error",
                data : null
            }
        }
    }
    return res;
}

export const update = async(data) => {
    var res;
    let tablename = data?.tablename,
        finddata = data?.finddata,
        valuedata = data?.valuedata;
    try{
        await tablename.findOneAndUpdate(finddata , {$set : valuedata} , {new : true}).then((result)=>{
            res = {
                type : "success" , 
                data : result
            }
        })
        console.log("res" , res);
    }
    catch(e){
        console.log("error" , e);
        res = {
            type : "error",
            data : null
        }
    }
    return res;
}

export const updatepush = async(data) => {
    let res;
    let tablename = data?.tablename,
        finddata = data?.finddata,
        valuedata = data?.valuedata;
    try{
        tablename.findOneAndUpdate(finddata,valuedata , {new : true}).then((result)=>{
            res = {
                type : "success" , 
                data : result
            }
        })
    }
    catch(e){
        console.log("error" , e);
        res = {
            type : "error",
            data : null
        }
    }
    return res;
}