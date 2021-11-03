const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type","application/json");
    response.end(JSON.stringify({ a: 1}, null, 3));
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
