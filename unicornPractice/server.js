var express = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    unicornCtrl = require('./api/controllers/unicornCtrl'),
    port        = 8080,
    app         = express();


app.get('/', unicornCtrl.getQuotes);


app.listen(port, function() {
    console.log('Listening on', port);
});
