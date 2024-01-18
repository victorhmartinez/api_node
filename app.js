require('dotenv').config();
const express= require('express');
const {dbConnectMySql}= require('./config/mysql');
const dbConnectNoSQL= require('./config/mongo');

const cors = require('cors');
const swaggerUI= require("swagger-ui-express")
const operApiConfiguration = require("./docs/swagger")
const morganBody= require('morgan-body');

const loggerStream= require('./utils/handleLogger');
const app =express();

const ENGINE_BD= process.env.ENGINE_BD;

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));



morganBody(app,{
    naColors:true,
   
    stream:loggerStream,
    skip: function(req,res){
        return res.statusCode <400 // Si esta en los rangos de los 2xx y 3xx
    }
});
const port = process.env.PORT || 3000;
/**
 * Definir ruta de documentación
 */
app.use('/documentation',swaggerUI.serve,swaggerUI.setup(operApiConfiguration))
/**
 * Aqui  invocamos a las rutas
 */
//TODO localhost/api/_________________
app.use("/api",require('./routes'))

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
(ENGINE_BD==='nosql')? dbConnectNoSQL(): dbConnectMySql()
