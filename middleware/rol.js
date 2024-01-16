const { handleHttpError } = require("../utils/handleErros");

/**
 * Array con los roles permitidos
 * @param {*} roles 
 * @returns 
 */
const checkRol=(roles)=>(req,res,next)=>{
    try {
        const{user}=req;
       
        const rolesByUser=user.role;
        const checkValueRol=roles.some((rolSingle)=>rolesByUser.includes(rolSingle))// true, false
        if(!checkValueRol){
            handleHttpError(res,"USER_NOT_PERMISSIONS",403)
            return
        }
        next()
    } catch (e) {
        console.log(e);
        handleHttpError(res,"ERROR_PERMISIONS",403)

    }
    

}
module.exports=checkRol