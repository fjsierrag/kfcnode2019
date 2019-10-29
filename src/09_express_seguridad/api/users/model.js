const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false}
});

schema.pre("save", async function (next) {
    const self = this;
    try {
        if (!self.isModified("password")) {
            return next();
        }
        const plainPass = self.password;
        const hashedPassword = await bcrypt.hash(plainPass, 10);
        self.password = hashedPassword;
        next();
    } catch (e) {
        console.log(e);
    }
});

schema.post("save", function () {
    const user = this;
    user.password = undefined;
});


const User = mongoose.model("User", schema);

module.exports = User;