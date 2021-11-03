const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify({Today: today}));
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
