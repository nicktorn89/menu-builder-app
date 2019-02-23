const mongoose = require('../lib/mongoose');
const { Schema } = mongoose;

const subDishSchema = new mongoose.Schema({
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
    }],
    price: {
      type: Number,
      default: 0,
    },
});

exports.SubDish = mongoose.model('SubDish', subDishSchema);