var mongoose = require('mongoose');

var orderSchema = {
    user:           { type: String, required: true },
    products:    [{
        order: {
            product:    { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
            qty:        { type: Number, required: true },
            date:       { type: Date, default: new Date() }
        }
    }]
};

module.exports = new mongoose.Schema( orderSchema );
