const express = require("express");
const router = express.Router();
const keywordService = require("./api/keywords/service");
const tododService = require("./api/todos/service");

router.route("/about")
    .get((req, res) => {
        res.render("templates/about", {
        message: "Ya dañé todo!",
        cosas: ["FIFA", "God of War", "Age Of Empires", "GTA V"]
    });
});

router.route("/keywords")
    .get(async (req, res) => {
        const keywords = await keywordService.search();
        res.render("templates/keywords", {
            keywords
        });
    });

router.route("/todos")
    .get(async (req, res) => {
        const todos = await todoService.search();
        res.render("templates/todos", {
            todos
        });
    });


module.exports = router;