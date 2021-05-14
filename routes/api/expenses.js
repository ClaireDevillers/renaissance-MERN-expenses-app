const express = require('express');
const router = express.Router();
const ExpenseModel = require('../../models/expense.js'); 


router.post('/add', async function(req,res) {
    try {
        await ExpenseModel.create({
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            category: "Groceries",
        })
        
        res.status(200).json({message:"ok"})
    } catch (err) {
        console.error(err)
        res.status(400).json('Bad input')
    }
})

module.exports = router;