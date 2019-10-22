const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.write("Hello world");
    res.end();
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
})