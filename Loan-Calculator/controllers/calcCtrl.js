var express = require('express'),
    app     = express();

module.exports = {

    getInterest: function(req, res) {
        return res.json({interest_rate: Math.floor((Math.random()*2000)/10)/1000});
    }

};
