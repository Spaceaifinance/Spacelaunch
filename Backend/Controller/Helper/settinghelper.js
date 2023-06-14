import Setting from '../../Models/setting'
import Tokenlist from '../../Models/tokenCreation'

export const UseSettingSave = async(settingdata) => {
    const userSetting = new Setting(settingdata);
    try{
    await userSetting.save();
    }catch(e){
        console.log("Error  : ",e)
        return false;
    }
    
    return true;
}


export const UseTokenave = async(settingdata) => {
    const userSetting = new Tokenlist(settingdata);
    try{
    await userSetting.save();
    }catch(e){
        console.log("Error  : ",e)
        return false;
    }
    
    return true;
}


export const UseUpdateSettingValue = async(settingname,settingvalue ,id)=> {
    
    const filter = { _id : id };
    const update = {settingvalue : settingvalue , settingname : settingname};
    try{
        const data = await Setting.findOneAndUpdate(filter,{$set: update});
        return data;
        }
        catch(err){
            return false;
        }

}


export const UseGetAllsettingInfo = async()=>{
    const Data = await Setting.find({});
    return Data;
}


export const UseTokenPerUser = async(_userAddress)=>{
    var tokenList = await Tokenlist.find({ useraddress : _userAddress}).sort({_id:-1});
    return tokenList;
}
