const customHeader = (req, res, next) => {
    try{
        const apiKey= req.header.api_key;
        if(apiKey==='leifer-01'){
            next()
        }else{
            res.status(403);
        res.send({error:"API_KEY no es correcta"})
        }
    }catch(e){
        res.status(403);
        res.send({error:"ALGO ocurrio EN EL CUSTOM HEADER"})
    }
}
module.exports = customHeader;