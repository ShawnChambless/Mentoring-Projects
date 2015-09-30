var express     = require('express'),
    cors        = require('cors'),
    bodyParser  = require('body-parser'),
    mongo       = require('mongojs'),
    db          = mongo('birds', ['sightings']),
    birdCtrl    = require('./api/controllers/birdCtrl'),
    birds       = db.collection('bigBirds'),
    port        = 8080,
    app         = express();

app
    .use(cors())
    .use(bodyParser.json())


    .post('/api/sighting', birdCtrl.addSighting)
    .get('/api/sighting/:id', birdCtrl.getSightingRegion)
    .put('/api/sighting/:id', birdCtrl.updateSighting)
    .delete('/api/sighting/:id', birdCtrl.removeSighting)



    .listen(port, function() {
        console.log('Listening on', port);
    });
