const bcrypt = require("bcryptjs");
const config = require("config");

const {hashSalt} = config.get("crypt");

//const HASH_SALT = process.env.HASH_SALT || 10;

async function createHash(text) {
    return await bcrypt.hash(text, hashSalt);
}

async function compareHash(text, hash) {
    return await bcrypt.compare(text, hash);
}

module.exports = {
    createHash,
    compareHash
};


