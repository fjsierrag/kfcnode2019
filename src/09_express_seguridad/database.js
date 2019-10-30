const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/cursonode_1";

function connect() {
    mongoose.connect(
        MONGODB_URI,
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