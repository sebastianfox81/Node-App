const http = require('http');

const express = require('express');

const requestHandler = function(req, res) {
  res.setHeader('Content-Type', 'text/html');
};

const server = http.createServer(requestHandler);

server.listen(3000);

console.log('hello')