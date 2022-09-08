const validator =  require('validator');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const User = new mongoose.Schema({
    email: {
        type: String,
        required: [true,'Please provide email adress'],
        validate:{
            validator: validator.isEmail,
            message: 'Please provide a valid email adress'
        },
        unique: true
    },
    password: {
        type: String,
        required: [true,'Please provide password'],
        minLength: 6
    },
},
    {collection: 'user-data'}

)
User.pre('save', async function (next) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
});

const model = mongoose.model('UserData',User)
module.exports = model