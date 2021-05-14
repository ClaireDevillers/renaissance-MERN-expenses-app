const express = require('express');
const router = express.Router();
const CatsModel = require('../../models/category.js'); 


router.get('/', async function(req,res) {
    try {
        let cats = await CatsModel.find({})
        res.status(200).json(cats)
    } catch (err) {
        console.error(err)
        res.status(400).json("Couldn't retrieve cats")
    }
})

module.exports = router;