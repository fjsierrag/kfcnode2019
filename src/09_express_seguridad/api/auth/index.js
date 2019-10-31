const jwt = require("jsonwebtoken");
const User = require("../users/model");
const config = require("config");

/*
const SECRET_KEY = config.get("auth.secretKey");
const TOKEN_EXPIRES_IN = config.get("auth.tokenExpiresIn");
*/

const {secretKey, tokenExpiresIn} = config.get("auth");

async function isLoggedIn(req, res, next) {
    try {
        const auth = req.headers["authorization"];
        if (!auth) {
            return res.status(401).end();
        }
        const bearer = auth.split(" ");
        const token = bearer[1];

        const payload = jwt.verify(token, secretKey);
        //const payload = jwt.verify(token, SECRET_KEY);

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

    //return jwt.sign(payload, SECRET_KEY, {expiresIn: TOKEN_EXPIRES_IN});
    return jwt.sign(payload, secretKey, {expiresIn: tokenExpiresIn});
}

module.exports = {
    isLoggedIn,
    createToken
}