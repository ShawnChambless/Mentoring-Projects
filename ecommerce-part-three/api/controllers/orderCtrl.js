var express = require('express'),
    Orders  = require('../models/orderModel');

module.exports = {
    getAllOrders: function(req, res) {
        Order.find({}, function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(res);
        });
    },
    getOneOrder: function(req, res) {
        Order.findById({'_id': req.params.id}, function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(500).json(res);
        });
    },
    createOrder: function(req, res) {
        Order.create(req.body, function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(500).json(res);
        });
    },
    updateOrder: function(req, res) {
        Order.findByIdAndUpdate({'_id': req.params.id}, req.body, function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(500).json(res);
        });
    },
    removeOrder: function(req, res) {
        Order.findByIdAndRemove({'_id': req.params.id}, function(err, res) {
            if(err) return res.status(500).json(err);
            return res.status(500).json(res);
        });
    }
};
