const express = require("express");
const keywords = require("./api/keywords");
const products = require("./api/products");
const users = require("./api/users");

function routes(app) {
    app.use("/api/keywords", keywords);
    app.use("/api/products", products);
    app.use("/api/users", users);
}

module.exports = routes;