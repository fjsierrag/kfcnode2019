const express = require("express");

const middleware = require("./middleware");
const routes = require("./routes");
const db = require("./database");
const app = express();

middleware(app);
routes(app);

db.connect();
app.listen(3000, () => {
    console.log("http://localhost:3000");
});