var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    Food        = require('./api/models/foodModel'),
    port        = 8080,
    app         = express(),
    mongoUri    = 'mongodb://localhost:27017/fatApp';

mongoose
    .set('debug', true)
    .connect(mongoUri)
    .connection.once('open', function() {
      console.log('Connected to MongoDB at', mongoUri);
    });

app
    .use(bodyParser.json())
    .use(cors())
    .use(express.static(__dirname + '/public'))

    .post('/api/food', function(req, res) {
        Food.create(req.body, function(err, resp) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(resp);
        });
    })



    .listen(port, function() {
        console.log('Listening on:', port);
    });
