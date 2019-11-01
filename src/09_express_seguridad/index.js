const express = require("express");
const config = require("config");

/*
const dotenv=require("dotenv");
dotenv.config();
*/
const middleware = require("./middleware");
const routes = require("./routes");
const db = require("./database");
const {host, port} = config.get("server");

const PORT = port;
const HOST = host;

/*
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
*/


const app = express();


middleware(app);
routes(app);

//por defecto
app.set("view engine", "ejs");

db.connect();
app.listen(PORT, () => {

    console.log(`http://${HOST}:${PORT}`);
});

module.exports = app;