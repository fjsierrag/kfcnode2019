const http = require("http");
const fs=require("fs");

const server = http.createServer((req, res) => {
    const ws = fs.createWriteStream("./archivo3.txt");
    let contentLength=req.headers["content-length"];
    let currentLength=0;

    req.on("data",chunk=>{
        currentLength+=chunk.length;
        const percentage=(currentLength/contentLength)*100;
        res.write(`${percentage}%\n`);
    });
    req.pipe(ws);
    ws.on("finish",()=>{
        res.end();
    });
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
})