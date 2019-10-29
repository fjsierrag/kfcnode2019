const express = require("express");
const router = express.Router();
const controller = require("./controller");
const jwt = require("jsonwebtoken");

function isLoggedIn(req, res, next) {
    try {
        const auth = req.headers["authorization"];
        if (!auth) {
            return res.status(401).end();
        }
        const bearer = auth.split(" ");
        const token = bearer[1];
        const payload = jwt.verify(token, "THISISASECRET");
        req.user = payload;
        next();
    } catch (error) {
        console.log(error);
    }
}
router.route("/")
    .get(controller.search)
    .put(isLoggedIn, controller.create);

router.route("/:id")
    .get(controller.readById)
    .post(isLoggedIn, controller.update)
    .delete(controller.remove);

module.exports = router;


