const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.route("/")
    .get(controller.search)
    .put(controller.create);

router.route("/:id")
    .get(controller.readById)
    .post(controller.update)
    .delete(controller.remove);

module.exports = router;


