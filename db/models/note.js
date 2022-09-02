const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
    title: String,
    text: String,
    date: Date
})

module.exports = Note;