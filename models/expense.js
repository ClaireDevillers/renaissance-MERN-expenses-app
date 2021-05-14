const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000,
    },
    category: {
        type: String,
        default: "Home",
    }
}, {
    timestamps: true,
})

let ExpenseModel = mongoose.model('Expense', expenseSchema);
module.exports = ExpenseModel;