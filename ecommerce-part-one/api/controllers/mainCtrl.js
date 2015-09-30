var mongo       = require('mongojs'),
    db          = mongo('ecommerce', ['products']),
    products    = db.products;

module.exports = {
    getAll: function(req, res) {
        products.find({}, function(err, resp) {
            if(err) return res.status(505).json(resp);
            return res.status(200).json(resp);
        });
    },
    getSingle: function(req, res) {
        products.find({_id: mongo.ObjectId(req.params.id)}, function(err, resp) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(resp);
        });
    },
    updateProduct: function(req, res) {
        products.update({_id: mongo.ObjectId(req.params.id)}, req.body, function(err, resp) {
            console.log(req.body, err);
            if(err) return res.status(500).json(err);
            return res.status(200).json(resp);
        });
    },
    addProduct: function(req, res) {
        products.save(req.body.product, function(err, resp) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(resp);
        });
    },
    removeProduct: function(req, res) {
        products.remove({_id: mongo.ObjectId(req.params.id)}, function(err, resp) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(err);
        });
    }
};
