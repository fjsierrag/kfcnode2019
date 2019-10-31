const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    done: Boolean,
});

const Todo = mongoose.model("Todo", schema);

module.exports = Todo;