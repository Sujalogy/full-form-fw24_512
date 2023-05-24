const mongoose = require('mongoose');

//schema
const userSchema = mongoose.Schema({
    username : {type : String, required : true},
    email : {type : String, required : true},
    DOB : {type : String, required : true},
    Role : {type : String, required : true},
    location : {type : String, required : true},
    password : {type : String, required : true},
    confirmPassword : {type : String, required : true}
})

// model
const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
}