var express = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    port        = 8080,
    calcCtrl    = require('./controllers/calcCtrl'),
    app         = express();

app
    .use(bodyParser.json())
    .use(cors())
    .use(express.static(__dirname + '/public'))


    .get('/interestRate', calcCtrl.getInterest)


    .listen(port, function() {
        console.log('Listening on:', port);
    });
