const express = require('express')
const router = express.Router();
const { validatorLogin, validatorRegisterItem } = require('../validator/auth');
const { registerCtrl,loginCtrl } = require('../controllers/auth');
/*
 * Crear registro
 */
//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register
router.post('/register', validatorRegisterItem,registerCtrl)
router.post('/login', validatorLogin,loginCtrl)

module.exports = router;