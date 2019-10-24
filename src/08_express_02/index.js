const express = require("express");

const middleware = require("./middleware");
const routes = require("./routes");
const app = express();

middleware(app);
routes(app);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});