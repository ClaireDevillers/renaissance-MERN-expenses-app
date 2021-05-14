// helper to seed the db with categories

require('dotenv').config()
require('./config/database')

const CategoryModel = require('./models/category');

(async function populateDB() {
    await CategoryModel.deleteMany({})
    await CategoryModel.create([
        {name: "Groceries", faIcon: "fa-cart-arrow-down"},
        {name: "Home", faIcon: "fa-home"},
        {name: "Dining out", faIcon: "fa-cutlery"},
        {name: "Health", faIcon: "fa-heartbeat"},
        {name: "Books", faIcon: "fa-book"},
        {name: "Music", faIcon: "fa-music"},
        {name: "Games", faIcon: "fa-gamepad"},
    ]);
    process.exit();
})();