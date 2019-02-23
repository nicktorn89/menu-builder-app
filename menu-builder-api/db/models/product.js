const mongoose = require('../lib/mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        // required: true, 
        // TODO: Add in FoodStore.jsx way to add price
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

exports.Product = mongoose.model('Product', productSchema);