//Get current Date
let ts = Date.now();

let date_time = new Date(ts);
//Make sure to get UTC time
let date = date_time.getUTCDate();
let month = date_time.getUTCMonth() + 1;
let year = date_time.getUTCFullYear();
let hours = date_time.getUTCHours();
let mins = date_time.getUTCMinutes()

//main date
let fullDate = (year + "-" + month + "-" + date);
//testing for UTC time 
// let hourTime = ( hours + ":" + mins )

const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type","application/json");
    // response.end(JSON.stringify({ today: fullDate, time: hourTime}, null, 3)); <- Uncomment to test with hourTime
    response.end(JSON.stringify({ today: fullDate}, null, 3)); // Comment out here if testing with hourTime above
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
