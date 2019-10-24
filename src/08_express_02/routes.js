const express = require("express");
const keywords = require("./api/keywords");
const products = require("./api/products");

function routes(app) {
    app.use("/api/keywords", keywords);
    app.use("/api/products", products);
}

module.exports = routes;