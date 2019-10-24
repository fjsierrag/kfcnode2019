const express = require("express");

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

function search(req, res) {
    return res.send(keywords);
}

function create(req, res) {
    const id = req.params.id;
    const keyword = req.body;
    const index = keywords.findIndex(k => k.id === id);
    keywords.splice(index, 1, keyword);
    res.status(204).end();
}

function readById(req, res) {
    const id = req.params.id;
    console.log(keywords);
    const obj = keywords.find(k => k.id === id);
    if (!obj) {
        return res.status(404).send("No se encontró ningún valor");
    }
    return res.send(obj);
}

function update(req, res) {
    const entrada = req.body;
    keywords.push(entrada);
    console.log(keywords);
    return res.status(201).send(entrada);
}

function remove(req, res) {
    const id = req.params.id;
    const keyword = req.body;
    const index = keywords.findIndex(k => k.id === id);
    keywords.splice(index, 1);
    res.status(204).end();
}

module.exports = {
    search,
    create,
    readById,
    update,
    remove
};