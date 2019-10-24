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

app.route("/keywords")
    .get((req, res) => {
        return res.send(keywords);
    })
    .put((req, res) => {
        const id = req.params.id;
        const keyword = req.body;
        const index = keywords.findIndex(k => k.id === id);
        keywords.splice(index, 1, keyword);
        res.status(204).end();
    });

app.route("/keywords/:id")
    .get((req, res) => {
        const id = req.params.id;
        console.log(keywords);
        const obj = keywords.find(k => k.id === id);
        if (!obj) {
            return res.status(404).send("No se encontró ningún valor");
        }
        return res.send(obj);
    })
    .post((req, res) => {
        const entrada = req.body;
        keywords.push(entrada);
        console.log(keywords);
        return res.status(201).send(entrada);
    })
    .delete((req, res) => {
        const id = req.params.id;
        const keyword = req.body;
        const index = keywords.findIndex(k => k.id === id);
        keywords.splice(index, 1);
        res.status(204).end();
    });

app.listen(3000, () => {
    console.log("http://localhost:3000");
});