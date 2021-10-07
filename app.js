const http = require('http');

const requestHandler = function(req, res) {
  console.log(req)
}

const server = http.createServer(requestHandler);

server.listen(3000);