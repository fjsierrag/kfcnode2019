const express = require("express");

const middleware = require("./middleware");
const routes = require("./routes");
const db = require("./database");
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

middleware(app);
routes(app);

//por defecto
app.set("view engine", "ejs");

db.connect();
app.listen(PORT, () => {

    console.log(`http://${HOST}:${PORT}`);
});
