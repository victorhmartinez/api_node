const express = require('express');
const router = express.Router();
const customHeader=require('../middleware/customHeader')
const {validaorCreateItem, validaorGetItem}= require("../validator/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
//http://localhost/tracks GET, POST, UPDATE, DELETE
/**
 * Listar los items
 */
router.get("/", getItems);
/**
 * Obtener un detalle de un Item
 */
router.get("/:id",validaorGetItem, getItem);
/**
 * Crear un items
 */
router.post("/",validaorCreateItem,createItem)
/**
 * Actulizar un detalle de un Item
 */
router.put("/:id",validaorGetItem,validaorCreateItem, updateItem);
/**
 * Eliminar un Item
 */
router.delete("/:id",validaorGetItem, deleteItem);

module.exports = router;