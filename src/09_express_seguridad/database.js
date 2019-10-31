const mongoose = require("mongoose");
const config = require("config");

function connect() {
    const database = config.get("database");
    mongoose.connect(database.uri, database.options);

    const conn = mongoose.connection;
    conn.on("error", error => {
        console.log("No hay conexión a la base de datos", error);
    });

    conn.on("open", data => {
        console.log("Conectado correctamente a MongoDB");
    });
}

module.exports = {connect};