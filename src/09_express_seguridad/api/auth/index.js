const jwt = require("jsonwebtoken");
const User = require("../users/model");

const SECRET_KEY = process.env.SECRET_KEY || "THISISASECRET";
const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || "2h";

async function isLoggedIn(req, res, next) {
    try {
        const auth = req.headers["authorization"];
        if (!auth) {
            return res.status(401).end();
        }
        const bearer = auth.split(" ");
        const token = bearer[1];
        const payload = jwt.verify(token, SECRET_KEY);

        const user = await User.findById(payload._id);
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
    }
}

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };

    return jwt.sign(payload, SECRET_KEY, {expiresIn: TOKEN_EXPIRES_IN});
}

module.exports = {
    isLoggedIn,
    createToken
}