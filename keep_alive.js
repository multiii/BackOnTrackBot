var http = require('http');

http.createServer(function (req, res) {
  res.write("<h1>Hello! How's it going.</h1>");
  res.end();
}).listen(8080);