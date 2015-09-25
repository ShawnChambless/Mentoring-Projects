var http = require('http');
var port = 1337;
var server = http.createServer().listen(port, function() {
        console.log('Listening on', port);
    });
server.on('request', function(req, res) {
    res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    if(req.method === 'GET') {
        res.end(JSON.stringify('HELLO BACK'));
    }

});
