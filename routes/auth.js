const express = require('express')
const { userModel } = require('../models')
const router = express.Router();
const { encrypt, compare } = require('../utils/handlePassword')
const { validatorLogin, validatorRegisterItem } = require('../validator/auth');
const { matchedData } = require('express-validator');
/*
 * Crear registro
 */
//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register
router.post('/register', validatorRegisterItem, async (req, res) => {
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = { ...req, password }
    const data = await userModel.create(body)
    data.set('password',undefined,{strict:false})
    res.send({ data })
})

module.exports = router;