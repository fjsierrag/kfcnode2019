const express = require("express");
const router = express.Router();
const users = require("./users");
const keywords = require("./keywords");
const products = require("./products");

router.use("/users", users);
router.use("/keywords", keywords);
router.use("/products", products);

module.exports = router;