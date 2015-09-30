var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongo       = require('mongojs'),
    db          = mongo('ecommerce', ['products']),
    mainCtrl    = require('./api/controllers/mainCtrl'),
    port        = 8080,
    app         = express();

app
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.json())
    .use(cors())


    .get('/api/products', mainCtrl.getAll)
    .get('/api/products/:id', mainCtrl.getSingle)
    .put('/api/products/:id', mainCtrl.updateProduct)
    .post('/api/products', mainCtrl.addProduct)
    .delete('/api/products/:id', mainCtrl.removeProduct)




    .listen(port, function() {
        console.log('Listening on:', port);
    });
