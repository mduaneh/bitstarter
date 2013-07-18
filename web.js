var express = require('express');
var fs  = require('fs');
var app = express.createServer(express.logger());
var index = new Buffer(fs.readFileSync('index.html'));  
// This will return a buff indx with the contents of index.html within it.
var string = index.toString();

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
