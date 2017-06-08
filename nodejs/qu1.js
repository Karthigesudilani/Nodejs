var http = require('http');
var dt = require('./myfirstmodule1');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Total of the two numbers: " + dt.sum(123,321));
    res.end();
}).listen(8080);
