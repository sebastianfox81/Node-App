const http = require('http');

const requestHandler = function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.
}

const server = http.createServer(requestHandler);

server.listen(3000);