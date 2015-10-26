var mongoose = require('mongoose'),
    orderSchema = require('./orderModel');

var userSchema = {
    name: { type: String, required: true },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],
    cart: [orderSchema]
};

module.exports = new mongoose.Schema( userSchema );
