const mongoose = require("mongoose");

function connect() {
    mongoose.connect(
        "mongodb://localhost:27017/cursonode_1",
        {
            useNewUrlParser: true,
            poolSize: 10,
            useUnifiedTopology: true
        }
    );

    const conn = mongoose.connection;
    conn.on("error", error => {
        console.log("No hay conexión a la base de datos", error);
    });

    conn.on("open", data => {
        console.log("Conectado correctamente a MongoDB");
    });
}

module.exports = {connect};