const Todos = require("./model");

async function search() {
    return await Todos.find();
}

module.exports = {search};