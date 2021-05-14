const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    faIcon: String,
}, {
    timestamps: true,
})

let CatModel = mongoose.model('Category', catSchema);
module.exports = CatModel;