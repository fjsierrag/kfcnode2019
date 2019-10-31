const express = require("express");
const keywords = require("./api/keywords");
const products = require("./api/products");
const todos = require("./api/todos");

function routes(app) {
    app.use("/api/keywords", keywords);
    app.use("/api/products", products);
    app.use("/api/todos", todos);
}

module.exports = routes;