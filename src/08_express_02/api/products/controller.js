//const express = require("express");

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

function search(req, res) {
    return res.send(products);
}

function create(req, res) {
    const id = req.params.id;
    const product = req.body;
    const index = products.findIndex(k => k.id === id);
    products.splice(index, 1, product);
    res.status(204).end();
}

function readById(req, res) {
    const id = req.params.id;
    console.log(products);
    const obj = products.find(k => k.id === id);
    if (!obj) {
        return res.status(404).send("No se encontró ningún valor");
    }
    return res.send(obj);
}

function update(req, res) {
    const entrada = req.body;
    products.push(entrada);
    console.log(products);
    return res.status(201).send(entrada);
}

function remove(req, res) {
    const id = req.params.id;
    const product = req.body;
    const index = products.findIndex(k => k.id === id);
    products.splice(index, 1);
    res.status(204).end();
}

module.exports = {
    search,
    create,
    readById,
    update,
    remove
};