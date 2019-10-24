const express = require("express");
const router = express.Router();


const products = [
    {
        id: 1,
        name: "prod1",
        descripcion: "Producto 1",
        price: "15.00"
    },
    {
        id: 2,
        name: "prod2",
        descripcion: "Producto 3",
        price: "15.00"
    },
    {
        id: 3,
        name: "prod3",
        descripcion: "Producto 4",
        price: "15.00"
    },
    {
        id: 4,
        name: "prod4",
        descripcion: "Producto 5",
        price: "15.00"
    },
    {
        id: 5,
        name: "prod5",
        descripcion: "Producto 5",
        price: "15.00"
    }
];

router.route("/")
    .get((req, res) => {
        return res.send(products);
    })
    .put((req, res) => {
        const id = req.params.id;
        const product = req.body;
        const index = products.findIndex(k => k.id === id);
        products.splice(index, 1, product);
        res.status(204).end();
    });

router.route("/:id")
    .get((req, res) => {
        const id = req.params.id;
        console.log(products);
        const obj = products.find(k => k.id === id);
        if (!obj) {
            return res.status(404).send("No se encontró ningún valor");
        }
        return res.send(obj);
    })
    .post((req, res) => {
        const entrada = req.body;
        products.push(entrada);
        console.log(products);
        return res.status(201).send(entrada);
    })
    .patch((req, res) => {
        const id = req.params.id;
        const product = req.body;
        const index = products.findIndex(k => k.id === id);
        if (!product) {
            res.status(404).end();
        }
        const newProduct = {
            ...product,
            ...patch
        };

        products.splice(index, 1, newProduct);
        res.status(204).end();
    })
    .delete((req, res) => {
        const id = req.params.id;
        const product = req.body;
        const index = products.findIndex(k => k.id === id);
        products.splice(index, 1);
        res.status(204).end();
    });

module.exports = router;

