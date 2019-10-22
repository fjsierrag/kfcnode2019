const http = require("http");
const fs=require("fs");

const server = http.createServer((req, res) => {

    res.writeHead(200);
    const index = fs.createReadStream("./public/index.html");
    index.pipe(res);
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
})