var express = require('express'),
    app     = express(),
    bodyParser  = require('body-parser'),
    port        = 8080,
    array       = [],
    occupations = ['Last: Aircraft Maintenance Assistant @ Pegasus Aviation Services', 'Current: Mentor/Developer @ DevMountain'],
    name        = 'Shawn',
    location    = 'Scenic Provo, UT',
    hobbies     = ['Beer brewing', 'coding'],
    skills      = [],
    cors        = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/all', function(req, res) {
    res.json([{name: name}, {location: location}, {hobbies: hobbies}, {skills: skills}, {occupations: occupations}]);
});

app.get('/name', function(req, res) {
    res.json(name);
});

app.get('/location', function(req, res) {
    res.json(location);
});

app.get('/hobbies', function(req, res) {
    res.json(hobbies);
});

app.get('/occupations/latest', function(req, res) {
    res.json(occupations[occupations.length - 1]);
});

app.get('/skills', function(req, res) {
    res.json(skills);
});

app.get('/skills:param', function(req, res) {
    if(skills[skills.indexOf(req.params.param)]) res.json(skills[skills.indexOf(req.params.param)]);
    res.json('Sorry that\'s not a thing.');
});

app.put('/name', function(req, res) {
    name = req.body;
    res.json(name);
});

app.put('/location', function(req, res) {
    location = req.body;
    res.json(location);
});

app.post('/hobbies', function(req, res) {
    hobbies.push(req.body);
    res.json(hobbies);
});

app.post('/occupations', function(req, res) {
    occupations.push(req.body);
    res.json(occupations);
});

app.post('/skills', function(req, res) {
    skills.push(req.body);
    res.json(skills);
});

app.listen(port, function() {
    console.log('Listening on:', port);
});
