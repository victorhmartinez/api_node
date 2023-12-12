const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleErros')
/**
 * 
 * Obtener lista de la base de datos
 */

const getItems = async (req, res) => {

    try {
        const data = await tracksModel.find({})
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }

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
    try{
       
     const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })
    }catch(e){
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
    

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