const mongoose = require("mongoose");

/* Mongoose hooks
*   schema.pre("save",function(next){});
*   schema.pre("update",function(next){});
*
*   schema.pre("save",function(next){
*       const user = this;
*       if(!user.isModified("password")) return next();
*       const hashedPassword = hash(user.password,10);
*       user.password = hashedPassword;
*       next();
*   });
*/

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descripcion: String,
    price: String,
});

const Product = mongoose.model("Product", schema);

module.exports = Product;