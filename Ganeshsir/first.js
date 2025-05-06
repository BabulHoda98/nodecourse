// 1. Create a basic HTTP server that responds with "Welcome to Node.js!" on every request.
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to Node.js!\n");
});

