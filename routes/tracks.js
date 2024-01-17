const express = require('express');
const router = express.Router();
const authMiddleware=require('../middleware/session')
const {validaorCreateItem, validaorGetItem}= require("../validator/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
const checkRol = require('../middleware/rol');
//http://localhost/tracks GET, POST, UPDATE, DELETE
/**
 * Listar los items
 */
router.get("/",getItems);
//router.get("/", authMiddleware,getItems);
/**
 * Obtener un detalle de un Item
 */
router.get("/:id",validaorGetItem, getItem);
/**
 * Crear un items
 */
router.post("/",validaorCreateItem, createItem)
//router.post("/",validaorCreateItem, authMiddleware,checkRol(["admin"]),createItem)
/**
 * Actulizar un detalle de un Item
 */
router.put("/:id",validaorGetItem,validaorCreateItem, updateItem);
/**
 * Eliminar un Item
 */
router.delete("/:id",validaorGetItem, deleteItem);

module.exports = router;