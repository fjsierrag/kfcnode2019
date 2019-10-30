const express = require("express");
const router = express.Router();
const controller = require("./controller");
const {isLoggedIn} = require("../auth");

router.route("/")
    .get(isLoggedIn, (req, res) => {
        res.send({});
    })
    .put(controller.create);

router.route("/login")
    .post(controller.login);

module.exports = router;


