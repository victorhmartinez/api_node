const{ handleHttpError }= require('../utils/handleErros')
const{ verifyToken }= require('../utils/handleJwt')
const{userModel}= require('../models')
const getProperties  = require("../utils/handlePropertiesEngine")
const propertiesKey=getProperties();
const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            handleHttpError(res,"NOT_TOKEN_NED_SESSION",401)
            return
        }
        //token sin el bear
        const token=req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
    
        if(!dataToken){
            handleHttpError(res,"NOT_PAYLOAD_DATA",401)
            return
        }
        const query={
            [propertiesKey.id]:dataToken[dataToken.id]
        }
      //_id o id
        const user=await userModel.findOne(query)
        req.user=user

        next()
    } catch (e) {
        console.log(e)
        handleHttpError(res,"NOT_SESSIONS",401)
    }
}
module.exports = authMiddleware