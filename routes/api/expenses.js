const express = require('express');
const router = express.Router();
const ExpenseModel = require('../../models/expense.js'); 

router.delete('/:id', async function(req,res) {
    try {
        await ExpenseModel.findByIdAndDelete(req.params.id)
        const list = await ExpenseModel.find({})
        res.status(200).json(list)

    } catch (err) {
        console.log(err)
        res.status(400).json('Delete operation failed')
    }
})

router.get('/', async function(req,res) {
    try {
        const list = await ExpenseModel.find({})
        res.status(200).json(list)

    } catch(err) {
        console.error(err)
        res.status(400).json('Could not return expense list')
    }
})

router.post('/add', async function(req,res) {
    try {
        await ExpenseModel.create({
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            category: req.body.category,
        })
        const list = await ExpenseModel.find({})
        
        res.status(200).json(list)
    } catch (err) {
        console.error(err)
        res.status(400).json('Bad input')
    }
})

module.exports = router;