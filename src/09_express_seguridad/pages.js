const express = require("express");
const router = express.Router();
const keywordService = require("./api/keywords/service");

router.route("/about", (req, res) => {
    res.render("about", {
        message: "Ya dañé todo!",
        cosas: ["FIFA", "God of War", "Age Of Empires", "GTA V"]
    });
});

router.route("/keywords")
    .get(async (req, res) => {
        const keywords = await keywordService.search();
        res.render("keywords", {
            keywords
        });
    });

module.exports = router;