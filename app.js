var http = require('http');
var express = require('express');
var app = express();

//app.engine( 'html', require('jade').__express);
app.use('/', express.static( __dirname + '/public'));
app.get('/', function(req, res) {
  console.log('Got a request');
  //res.send("hello");
});

app.use( function(err, req, res, next) {
  res.send(500, 'something broke!');
});

console.log( 'starting the express (NodeJS) web server');
var port = 8000;
app.listen(port);
console.log('Webserver is listening on port ' + port );