var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    port        = 8080,
    app         = express();

app
    .use(bodyParser.json())
    .use(cors())
    .use(express.static(__dirname + '/public'))



    .listen(port, function() {
        console.log('Listening on', port);
    });
mongoose.connect('mongodb://localhost:27017/ecommerse2', function(err, response) {
console.log('Error', err, 'Mongo is also Listening', response);
});
