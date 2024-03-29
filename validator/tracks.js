const { check } = require("express-validator")
const validateResults= require("../utils/handleValidator")
const validaorCreateItem = [
    check("name")
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 90 }),
    check("album")
        .exists()
        .notEmpty(),

    check("cover")
        .exists()
        .notEmpty(),
    check("artist")
        .exists()
        .notEmpty(),
    check("artist.name")
        .exists()
        .notEmpty(),
    check("artist.nickname")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .notEmpty(),
    check("duration.end")
        .exists()
        .notEmpty(),
    check("mediaId")
        .exists()
        .notEmpty(),

    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];
const validaorGetItem = [
   check("id")
        .exists()
        .notEmpty()
        ,

    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];
module.exports = { validaorCreateItem, validaorGetItem }