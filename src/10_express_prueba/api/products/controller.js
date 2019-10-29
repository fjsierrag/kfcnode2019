const Product = require("./model");
//const express = require("express");
/*
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
*/
async function search(req, res) {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function create(req, res) {
    const newProduct = req.body;
    try {
        const createdProduct = await Product.create(newProduct);
        res.status(201).send(createdProduct);
    } catch (error) {
        res.status(500).send(error);
    }
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

async function update(req, res) {
    const entrada = req.body;
    const id = req.params.id;
    try {
        await Product.findByIdAndUpdate(id, entrada);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }
}

async function remove(req, res) {
    const id = req.params.id;
    try {
        await Product.findByIdAndRemove(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    search,
    create,
    readById,
    update,
    remove
};