const mongoose = require('../lib/mongoose');
const { Schema } = mongoose;

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]
});

exports.Dish = mongoose.model('Dish', dishSchema);