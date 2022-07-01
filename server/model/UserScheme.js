const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:30
    },
    email:{
        required:true,
        type:String,
        min:2,
        max:50
    },
    password:{
        required:true,
        type: String
    },
    role: {
        type: String,
        default: "user",
    },
})


const User = mongoose.model('registration',userSchema)

module.exports = User;