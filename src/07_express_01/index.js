const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.writeHead(200);
    res.write("Solo tengo sueño en cantidades industriales");
    res.end();
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});