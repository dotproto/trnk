var express = require('express');
var app = express();
var port = 3000;

// app.get('/hello.txt', function(req, res){
// 	var body = 'Hello, world!';
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.setHeader('Content-Length', Buffer.byteLength(body));
// 	res.end(body);
// });

var logReq = function(req) {
	console.log(Date.now() + ": " + req.ip + " " + req.method + " \"" + req.originalUrl + "\"");
}

app.get('/hello.text', function(req, res){
	logReq(req);
	res.send('Hello World!');
});

app.listen(port);
console.log('Listening on port ' + port);
