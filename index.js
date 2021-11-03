const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end("Hello World! Testing new stuff");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
