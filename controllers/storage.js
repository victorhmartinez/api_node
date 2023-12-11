const { storgeModel } = require('../models')
const PUBLIC_URL=process.env.PUBLIC_URL;
/**
 * 
 * Obtener lista de la base de datos
 */

const getItems = async (req, res) => {
    const data = await storgeModel.find({})
    res.send({ data })
}
/**
 * Obtener un detalle
 */
const getItem = async (req, res) => {
    const data = ["hola", "mundo"]
    res.send({ data: data })
}
/**
 * Insertar un registro
 */
const createItem = async (req, res) => {
    const {body,file} = req
   const fileData={
    filename:file.filename,
    url:`${PUBLIC_URL}/${file.filename}`

   } 
   const data= await storgeModel.create(fileData)
    res.send({ data})
}
/**
 * Actualizar un registro
 */
const updateItem = () => {

}
/**
 * Eliminar un registro
 */
const deleteItem = () => {

}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }