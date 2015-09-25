var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    app         = express(),
    messages    = ['hello', 'goodbye'];

app.use(bodyParser.json());
app.use(cors());

    app.get('/', function(req, res) {
        res.json(messages);
    });
    app.post('/', function(req, res) {
            messages.push(req.body);
            console.log("Got POST data:", req.body);
            res.json(messages);
    });
    app.options('/', function() {
        res.sendStatus(500);
    });
app.listen(8080);
