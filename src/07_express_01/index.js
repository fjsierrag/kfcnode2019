const express = require("express");
const logger = require("./logger");
const app = express();

//El logger va antes del static
app.use(logger);
//enviando archivos estáticos
app.use(express.static("public"));


//Enviando la respuesta con la función send
app.get("/", (req, res) => {
    res.send("Solo tengo sueño en cantidades industriales");
});

//Enviando json
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

//Query Strings
app.get("/keywords-2", (req, res) => {
    console.log(req.query);
    let limite = req.query.limit;
    let length = req.query.length;
    const keywords = ["nodejs", "express", "todos", "ninguno"];
    let total = keywords.length;
    let limitInt = parseInt(limite);
    if (!limitInt || limitInt < 1) return res.send(keywords);

    return res.send(keywords.slice(0, limite));
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});