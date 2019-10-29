const Keyword = require("./model");

/*
const keywords = [
    {
        id: "nodejs",
        descripcion: "Lenguaje js",
        url: "http://url1.com"
    }, {
        id: "php",
        descripcion: "Lenguaje PHP",
        url: "http://url2.com"
    }, {
        id: "Laravel",
        descripcion: "Framework PHP",
        url: "http://url3.com"
    }
];
*/
async function search(req, res) {
    try {
        const keywords = await Keyword.find();
        res.send(keywords);
    } catch (error) {
        res.status(500).send(error);
    }
    /*
    Keyword.find()
        .then(keywords => res.send(keywords))
        .catch(err => res.status(500).send(err));
    */
    /*
    Keyword.find((err, keywords)=>{
        if(err){
            return reas.status(500).send(err);
        }
        return res.send(keywords);
    });
     */
}

async function create(req, res) {

    const newKeyword = req.body;
    try {
        const createdKeyword = await Keyword.create(newKeyword);
        res.status(201).send(createdKeyword);
    } catch (error) {
        res.status(500).send(error);
    }

    /*
        const newKeyword = req.body;
        Keyword.create(newKeyword)
         .then(createdKeyword => res.send(createdKeyword))
         .catch(err => res.status(500).send(err));

    */
    /*
    const newKeyword= req.body;
    Keyword.create(newKeyword,(err, createdKeyword)=>{
        if(err){
            return res.status(500).send(err);
        }
        return res.send(createdKeyword);
    });
    */

}

async function readById(req, res) {
    const id = req.params.id;
    try {
        const keyword = await Keyword.findById(id);
        res.send(keyword);
    } catch (error) {
        res.status(500).send(error);
    }

    /*
    const id = req.params.id;
    console.log(keywords);
    const obj = keywords.find(k => k.id === id);
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
        await Keyword.findByIdAndUpdate(id, entrada);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }
    /*
    const entrada = req.body;
    keywords.push(entrada);
    console.log(keywords);
    return res.status(201).send(entrada);
    */

}

async function remove(req, res) {
    const id = req.params.id;
    try {
        await Keyword.findByIdAndRemove(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    }
    /*
    const id = req.params.id;
    const keyword = req.body;
    const index = keywords.findIndex(k => k.id === id);
    keywords.splice(index, 1);
    res.status(204).end();
     */
}

module.exports = {search, create, readById, update, remove};