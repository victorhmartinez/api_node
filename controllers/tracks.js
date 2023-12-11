const { tracksModel } = require('../models')
/**
 * 
 * Obtener lista de la base de datos
 */

const getItems = async (req, res) => {
    const data = await tracksModel.find({})
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
    const { body } = req
    
   const data= await tracksModel.create(body)
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