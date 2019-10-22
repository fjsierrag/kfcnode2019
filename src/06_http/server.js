const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200);
    req.pipe(res);

    /*
    req.on("data",chunk=>{
        res.write(chunk);
    });

    req.on("end",()=>{
        res.end();
    });
    */

});

server.listen(3000, () => {
    console.log("http://localhost:3000");
})