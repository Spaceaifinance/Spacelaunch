import jwt from "jsonwebtoken";

export const UseToken = async(value,lifeTime,key)=>{
  const token = jwt.sign(
      value,
      key,
      {
        algorithm: "HS256",
        expiresIn:  lifeTime,
      }
    );
  return token;
}

export const UseValidateToken = async(token,key)=>{
    var isValid = false;
    var expired = false;
    var data;
    try {
        const decoded = jwt.verify(token,key);
        data = decoded;
        isValid = true;
      } catch (err) {
        console.log("error : ",((err).toString().split(':')[0]),((err).toString().split(':')[0]) == "TokenExpiredError")
        if(((err).toString().split(':')[0]) == "TokenExpiredError"){ isValid = true; expired = true; } else{ isValid = false; } 
      }
      return { isValid : isValid , isExpired : expired , data : data };
}