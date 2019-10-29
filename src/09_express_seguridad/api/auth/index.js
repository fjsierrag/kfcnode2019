const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function isLoggedIn(req, res, next) {
    try {
        const auth = req.headers["authorization"];
        if (!auth) {
            return res.status(401).end();
        }
        const bearer = auth.split(" ");
        const token = bearer[1];
        const payload = jwt.verify(token, "THISISASECRET");
        req.user = payload;
        next();
    } catch (error) {
        console.log(error);
    }
}

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }

    return jwt.sign(payload, "THISISASECRET", {expiresIn: "2h"});
}

async function createHash(text) {
    return await bcrypt.hash(text, 10);
}

async function compareHash(text, hash) {
    return await bcrypt.compare(text, hash);
}

module.exports = {
    isLoggedIn,
    createToken,
    createHash,
    compareHash
}


