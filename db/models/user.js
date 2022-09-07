const validator =  require('validator');
const mongoose = require('mongoose');

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

const model = mongoose.model('UserData',User)
module.exports = model