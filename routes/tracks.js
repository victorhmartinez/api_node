const express = require('express');
const router = express.Router();
const customHeader=require('../middleware/customHeader')
const {validaorCreateItem}= require("../validator/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
//http://localhost/tracks GET, POST, UPDATE, DELETE
router.get("/", getItems);

router.post("/",validaorCreateItem,createItem)
module.exports = router;