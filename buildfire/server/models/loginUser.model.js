const mongoose = require("mongoose");

const LoginUserSchema = new mongoose.Schema({
    businessEmail : {
        type: String, 
        required : [true, "Business email  is required"],
        minlength: [3, "Business email must be at least 3 characters"]
    },
    password : {
        type: String, 
        required : [true, "Password is required"],
        minlength: [5, "Password must be at least 5 characters"]
    },
})

const LoginUser = mongoose.model("LoginUser", LoginUserSchema);

module.exports = LoginUser