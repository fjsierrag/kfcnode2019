const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200);
    req.pipe(res);
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
})