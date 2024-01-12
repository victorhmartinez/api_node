const{ handleHttpError }= require('../utils/handleErros')
const{ verifyToken }= require('../utils/handleJwt')
const{userModel}= require('../models')
const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            handleHttpError(res,"NOT_TOKEN_NED_SESSION",401)
            return
        }
        //token sin el bear
        const token=req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
    
        if(!dataToken._id){
            handleHttpError(res,"ERROR_ID_TOKEN",401)
            return
        }
        const user=await userModel.findById(dataToken._id)
        req.user=user

        next()
    } catch (e) {
        console.log(e)
        handleHttpError(res,"NOT_SESSIONS",401)
    }
}
module.exports = authMiddleware