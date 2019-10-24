const express = require("express");
const app = express();

const keywords = [
    {
        id: "nodejs",
        descripcion: "Lenguaje js",
        url: "http://url1.com"
    }, {
        id: "php",
        descripcion: "Lenguaje PHP",
        url: "http://url2.com"
    }, {
        id: "Laravel",
        descripcion: "Framework PHP",
        url: "http://url3.com"
    }
];

//enviando archivos estáticos
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

//Enviar objetos
app.get("/keywords", (req, res) => {
    let limite = req.query.limit;
    let length = req.query.length;

    let total = keywords.length;
    let limitInt = parseInt(limite);
    if (!limitInt || limitInt < 1) return res.send(keywords);

    return res.send(keywords.slice(0, limite));
});

//Válido: http://localhost:3000/keywords/nodejs
//Inválido: http://localhost:3000/keywords/1

app.get("/keywords/:id", (req, res) => {
    const id = req.params.id;
    console.log(keywords);
    const obj = keywords.find(k => k.id === id);
    if (!obj) {
        return res.status(404).send("No se encontró ningún valor");
    }
    return res.send(obj);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});