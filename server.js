const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    setTimeout(() => {
        debugger;
                
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
    
        if(req.url.indexOf("?") >= 0) {
            let queryParams = url.parse(req.url, true).query;
            res.end("<h1>Query String</h1><br />param: " + JSON.stringify(queryParams));
        }
    
        if(req.url === "/" || req.url === "/home"){
            res.end("<h1>Home</h1>");
        }
    
        res.end("<h1>Not found</h1>");

    }, 5000);
});

server.listen(8080, "localhost", () => {
    console.log("Listener in http://localhost:8080");
});