var mongoose = require('mongoose');

var cartSchema = {
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
};
module.exports = new mongoose.Schema( cartSchema );
