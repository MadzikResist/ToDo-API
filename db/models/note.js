const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    done:{
        type: Boolean,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},{
    timestamps: true
});

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note;