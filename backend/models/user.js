const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    pfp:String,
});
const user = mongoose.model("User",userSchema);
module.exports=user;