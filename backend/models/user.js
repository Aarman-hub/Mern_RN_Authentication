const mongoose = require('mongoose');

const { Schema } = mongoose;


const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        maxlength:32,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'Customer'
    },
},{timestamps:true});


module.exports = mongoose.model("User", UserSchema)
