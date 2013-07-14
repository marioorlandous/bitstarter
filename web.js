var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  

  var filename=/home/ubuntu/bitstarter/index.html;
  var file_content=fs.readFileSync(filename);
  console.out(filename);
  console.out(file_content);


  response.send(file_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

