const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: Date,
    category: String,
}, {
    timestamps: true,
})

let ExpenseModel = mongoose.model('Expense', expenseSchema);
module.exports = ExpenseModel;