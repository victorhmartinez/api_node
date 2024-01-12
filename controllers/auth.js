const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt,compare } = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleErros");
const { use } = require("../routes/auth");
/**
 * Este contralador encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await userModel.create(body)
        dataUser.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({ data })
    } catch (e) {
        handleHttpError(res,"ERROR_REGISTER-USER")
    }

}
/**
 * Este es el encaragdi de loguear a un usuario
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
try {
    req=matchedData(req)
    const user= await userModel.findOne({email:req.email}).select('password name role email')
    if(!user){
        handleHttpError(res,"ERROR_NOT_EXISTS",404)
        return;
    }
    const hashPassword=user.get('password')
  
    const check= await compare(req.password,hashPassword)
    if(!check){
        handleHttpError(res,"PASSWORD_INVALID",401);
        return
    }
    user.set('password',undefined,{strict:false})

    const data={
        token: await tokenSign(user),
        user
    }
    res.send({data})
  

} catch (e) {
    
}
}

module.exports = { registerCtrl, loginCtrl }