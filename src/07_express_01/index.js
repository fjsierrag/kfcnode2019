const express = require("express");
const app = express();
//enviando archivos estáticos
app.use(express.static("public"));

//Enviando la respuesta con la función send
app.get("/", (req, res) => {
    res.send("Solo tengo sueño en cantidades industriales");
});


//Enviando archivos
app.get("/keywords", (req, res) => {
    const keywords = {
        algo: ["nodejs", "express"],
        algomas: 2
    };
    res.send(keywords);
});

//Enviando archivos
app.get("/archivo", (req, res) => {
    res.sendFile(__dirname + "/public/archivo3.txt");
});

//Ejercicio básico
app.get("/basico", (req, res) => {
    res.writeHead(200);
    res.write("Solo tengo sueño en cantidades industriales");
    res.end();
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});