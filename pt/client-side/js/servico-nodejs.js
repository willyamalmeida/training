const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
 if(req.url.indexOf("?") >= 0) {
	let query = url.parse(req.url, true).query;
	let param = JSON.stringify(query);
	res.end("<h1>Query String</h1><br />param: " + param);
 }

 if(req.url === "/" || req.url === "/home"){
	res.end("<h1>Home</h1>");
 }
});

server.listen(8080, "localhost", () => {
 console.log("Listener in http://localhost:8080");
});