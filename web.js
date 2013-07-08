var express = require('express');

var app = express.createServer(express.logger());
var index = fs.readFileSync(index.html);  // This will return a buff index with the contents of index.html within it.
var string = index.toString;
app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});