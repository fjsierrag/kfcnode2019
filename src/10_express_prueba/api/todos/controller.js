const Todo = require("./model");
const todoService = require("./service");

async function search(req, res) {
    try {
        const todos = await todoService.search();
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function create(req, res) {

    const newTodo = req.body;
    try {
        const createdTodo = await Todo.create(newTodo);
        res.status(201).send(createdTodo);
    } catch (error) {
        res.status(500).send(error);
    }

    /*
        const newTodo = req.body;
        Todo.create(newTodo)
         .then(createdTodo => res.send(createdTodo))
         .catch(err => res.status(500).send(err));

    */
    /*
    const newTodo= req.body;
    Todo.create(newTodo,(err, createdTodo)=>{
        if(err){
            return res.status(500).send(err);
        }
        return res.send(createdTodo);
    });
    */

}

async function readById(req, res) {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }

    /*
    const id = req.params.id;
    console.log(todos);
    const obj = todos.find(k => k.id === id);
    if (!obj) {
        return res.status(404).send("No se encontró ningún valor");
    }
    return res.send(obj);
    */
}

async function update(req, res) {
    const entrada = req.body;
    const id = req.params.id;
    try {
        await Todo.findByIdAndUpdate(id, entrada);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }
    /*
    const entrada = req.body;
    todos.push(entrada);
    console.log(todos);
    return res.status(201).send(entrada);
    */

}

async function remove(req, res) {
    const id = req.params.id;
    try {
        await Todo.findByIdAndRemove(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {search, create, readById, update, remove};