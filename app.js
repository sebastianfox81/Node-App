const http = require('http');

const requestHandler = function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  
};

const server = http.createServer(requestHandler);

server.listen(3000);