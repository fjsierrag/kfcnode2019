const User = require("./model");
const bcrypt = require("bcryptjs");

async function create(req, res) {
    const bodynewUser = req.body;

    try {
        console.log(User.create);
        const newUser = await User.create(bodynewUser);

        res.status(201).send(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function login(req, res) {
    const creds = req.body;
    const {email, password} = creds;

    if (!email) {
        return res.status(400).send("Se requiere el email");
    }

    if (!password) {
        return res.status(400).send("Se requiere el password");
    }
    try {
        const user = await User.findOne({email})
            .select("password");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Usuario o clave incorrectos");
        }
        const token = "1234567890";
        res.send(token);
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    create,
    login
};