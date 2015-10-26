var mongoose = require('mongoose'),
    userSchema = require('../models/userModel'),
    User = mongoose.model('User', userSchema);

module.exports = {
    getUser: function(req, res) {
        User.find({'_id': req.params.id})
        .populate('orders')
        .exec(function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(res);
        });
    },
    createUser: function(req, res) {
        User.create(req.body, function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(res);
        });
    },
    updateUser: function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(res);
        });
    }
};
