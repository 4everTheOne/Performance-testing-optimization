require('newrelic');

var http = require("http");

const ERROR_RATE = 90;

http.createServer(function (request, response) {
    var number = Math.random() * 100;
    if (number >= ERROR_RATE) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Goodbye world\n');
    } else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World\n');
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');