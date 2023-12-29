const express = require('express')
const router = express.Router();
const { uploadMiddleware } = require("../utils/handleStorage");
const { createItem, getItems, getItem, deleteItem } = require('../controllers/storage');
const {validaorGetItem}= require("../validator/storage")

/**
 * Lista de items
 */
router.get('/', getItems)
/**
 * Detalle de Item
 */
router.get('/:id',validaorGetItem, getItem)
/**
 * Eliminar Item
 */
router.delete('/:id',validaorGetItem ,deleteItem)
/**
 * Crear item
 */
router.post('/', uploadMiddleware.single("myfile"), createItem)

module.exports = router;