import {UseSettingSave,UseUpdateSettingValue,UseGetAllsettingInfo, UseTokenave, UseTokenPerUser} from "./Helper/settinghelper"
import Setting from '../Models/setting'


export const NewSetting = async (req, res) => {
    const settingname = req.body.settingname;
    const settingvalue = req.body.settingvalue;
    const feeforproposal = req?.body?.feeforproposal;
    const feeforvoting = req?.body?.feeforvoting;
    const newSetting = {
        settingname: settingname,
        settingvalue: settingvalue,
        // feeforproposal : feeforproposal,
        // feeforvoting : feeforvoting
    };

    await UseSettingSave(newSetting).then((data) =>{
    if(data){
        res.json({
            success: true, data: "Successfully Added !"
        });
    }

    })
}

export const UpdateSettingValue = async (req, res) => {
    

   
    const settingname = req.body.settingname;
    const settingvalue = req.body.settingvalue;
    const id = req?.body?.id
    // const feeforproposal = req?.body?.feeforproposal;
    // const feeforvoting = req?.body?.feeforvoting;
    await UseUpdateSettingValue(settingname, settingvalue ,id).then(async () => {
        res.json({      success: true, 
                        data: `${settingname} value Changed !`,
                    });
                
            })
}

export const getAllSettingInfo = async (req, res) => {
    try {
        const SettingData =  await Setting.find({}).sort({createdAt : -1}).skip(req?.query?.skip).limit(req?.query?.limit);
        const count = await Setting.count({});
        if (SettingData == "" || SettingData == null) {
            res.json({
                success: false, data: "Setting Info Does'nt Exists !"
            });
            return false;
        }
        res.json({
            success: true, data: SettingData , count : count
        });
        // res.send()
    } catch (e) {
        console.log("error", e);
    }
}


export const NewTokenCreation = async (req, res) => {
    var useraddress = req.body.useraddress;
    var tokenaddress = req.body.tokenaddress;
    var name = req?.body?.name;
    var symbol = req?.body?.symbol;
    var decimal = req?.body?.decimal;
    var type =  req.body?.type
  
    const newToken = {
        useraddress: useraddress,
        tokenaddress: tokenaddress,
        name : name,
        symbol : symbol,
        decimal: decimal,
        type : type
    };

    await UseTokenave(newToken).then((data) =>{
    if(data){
        res.json({
            success: true, data: "Successfully Added !"
        });
    }

    })
}


export const TokensPerUser = async(req,res)=>{
    var userAddress = (req.params.useraddress).toLowerCase();
    var tokenList = await UseTokenPerUser(userAddress);
    res.json({ success: true, data : tokenList });
}