const { Sequelize } = require("sequelize")
const database = process.env.MYSQL_DATABASE
const username = process.env.MYSQL_USERNAME
const password = process.env.MYSQL_PASSWORD
const host = process.env.MYSQL_HOST

/**
 * Funcion para establecer la bd
 */
const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: "mysql"
    }
)
/**
 * Duncion para conectar a la BD
 */
const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log('MYSQL conexión correcta')
    } catch (e) {
        console.log("MYSQL error de conexion", e)
    }
}
module.exports = { sequelize, dbConnectMySql }