const express = require("express");
const keywords = require("./keywords");
const products = require("./products");
const app = express();


//enviando archivos estáticos
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/keywords", keywords);
app.use("/products", products);
app.listen(3000, () => {
    console.log("http://localhost:3000");
});