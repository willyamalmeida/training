const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    debugger;

    setInterval(() => {}, 5000);

    if(req.url.indexOf("?") >= 0) {
        let queryParams = url.parse(req.url, true).query;
        res.end("<h1>Query String</h1><br />param: " + JSON.stringify(queryParams));
    }

    if(req.url === "/"){
        res.end("<h1>Home</h1>");
    }

    res.end("<h1>Not found</h1>");
});

server.listen(8080, "localhost", () => {
    console.log("Listener in http://localhost:8080");
});