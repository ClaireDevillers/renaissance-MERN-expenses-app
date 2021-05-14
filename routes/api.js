const express = require('express');
const router = express.Router();
const ExpenseModel = require('../models/expense.js'); 


router.post('/add', async function(req,res) {
    // create
    await ExpenseModel.create({
        description: req.body.description,
        amount: req.body.amount,
        date: req.body.date,
        category: "Groceries",
    })
    // respond
    res.json("ok")
})

module.exports = router;