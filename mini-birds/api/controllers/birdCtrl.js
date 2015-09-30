var mongo       = require('mongojs'),
    db          = mongo('birds', ['sightings']),
    sightings   =   db.sightings;
module.exports = {
    addSighting: function(req, res) {
        sightings.save(req.body, function(err, resp) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(resp);
        });
    },
    getSightingRegion: function(req, res) {
        sightings.find({name: req.params.name}, function(err, resp) {
            if(err) res.status(500).json(err);
            return res.status(200).json(resp);
        });
    },
    updateSighting: function(req, res) {
        sightings.update({_id: mongo.ObjectId(req.params.id)}, req.body, function(err, resp) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(resp);
        });
    },
    removeSighting: function(req, res) {
        sightings.remove({_id: mongo.ObjectId(req.params.id)}, function(err, resp) {
            if(err) return res.status(500).json(err);
            return res.status(200).json(resp);
        });
    }
};
