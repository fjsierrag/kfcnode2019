const express = require("express");
const router = express.Router();

const users = require("./users");
const keywords = require("./keywords");
const products = require("./products");
const todos = require("./todos");

router.use("/users", users);
router.use("/keywords", keywords);
router.use("/products", products);
router.use("/todos", todos);

module.exports = router;