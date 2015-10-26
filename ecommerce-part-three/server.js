var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    userCtrl    = require('./api/controllers/userCtrl'),
    orderCtrl   = require('./api/controllers/orderCtrl'),
    port        = 8080,
    app         = express();


mongoose
    .set('debug', true)
    .connect('mongodb://localhost:27017/ecommerce3', function(err, response) {
        console.log(err, 'Mongo is also Listening', response);
    });

app
    .use(cors())
    .use(bodyParser.json())
    .use(express.static(__dirname + '/public'))


    .get(   '/api/user/:id',    userCtrl.getUser        )
    .post(  '/api/user',        userCtrl.createUser     )
    .put(   '/api/user/:id',    userCtrl.updateUser     )

    .get(   '/api/orders',      orderCtrl.getAllOrders  )
    .get(   '/api/orders/:id',  orderCtrl.getOneOrder   )
    .post(  '/api/orders/:id',  orderCtrl.createOrder   )
    .put(   '/api/orders/:id',  orderCtrl.updateOrder   )
    .delete('/api/orders/:id',  orderCtrl.removeOrder   )
    //
    // .get(   '/api/cart',        cartCtrl.getCart        )
    // .post(  '/api/cart',        cartCtrl.createCart     )
    // .put(   '/api/cart',        cartCtrl.updateCart     )
    // .delete('/api/cart/:id',    cartCtrl.emptyCart      )




    .listen(port, function() {
        console.log('Listening on', port);
    });
