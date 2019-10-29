const express = require("express");
const router = express.Router();
const controller = require("./controller");
const {isLoggedIn} = require("../auth");

router.route("/")
    .get(controller.search)
    .put(isLoggedIn, controller.create);

router.route("/:id")
    .get(isLoggedIn, controller.readById)
    .post(isLoggedIn, controller.update)
    .delete(isLoggedIn, controller.remove);

module.exports = router;


