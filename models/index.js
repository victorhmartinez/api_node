const ENGINE_db=process.env.ENGINE_BD;
const pathModels= ENGINE_db==="nosql"?"./nosql":"./mysql"
const models={
 userModel:require(`${pathModels}/users`),
 tracksModel:require(`${pathModels}/tracks`),
 storgeModel:require(`${pathModels}/storage`)
}
module.exports = models;