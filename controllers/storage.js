const fs=require('fs')
const { matchedData } = require('express-validator');
const { storgeModel } = require('../models');
const { handleHttpError } = require('../utils/handleErros');
const PUBLIC_URL=process.env.PUBLIC_URL;
const MEDIA_PATH=`${__dirname}/../storage`;
/**
 * 
 * Obtener lista de la base de datos
 */

const getItems = async (req, res) => {
    try{
        const data = await storgeModel.find({})
        res.send({ data })
    }catch(e){
        handleHttpError(res,"ERROR_GET_LIST_ITEMS")
    }

   
}
/**
 * Obtener un detalle
 */
const getItem = async (req, res) => {
    try{
        const{id}=matchedData(req)
        const data = await storgeModel.findById(id)
        res.send({ data })
    }catch(e){
        handleHttpError(res,"ERROR_GET_DETAIL_ITEM")
    }

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
const updateItem = async(req, res) => {

}
/**
 * Eliminar un registro
 */
const deleteItem = async(req, res) => {
    try{
        const{id}=matchedData(req)
        const dataFile = await storgeModel.findById(id)
        await storgeModel.deleteOne(id)
        const{filename}=dataFile
        const filePath =`${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath)
        const data={
            filePath,
            delete:1
        }
        res.send({ data })
    }catch(e){
        handleHttpError(res,"ERROR_GET_DETAIL_ITEM")
    }
}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }