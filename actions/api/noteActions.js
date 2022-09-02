const Note = require('../../db/models/note');

class NoteActions  {
   saveNote(req, res){
       // const newNote = new Note({
       //     title: 'Zrobić zakupy',
       //     text: 'mleko, jajka',
       //     date: new Date()
       // });
       // newNote.save().then(() => {
       //     console.log('notatka zostala zapisana')
       // });
       const title = req.body.title;
       const text = req.body.text;
       const date = req.body.date;
       res.send('notatka stworzona. Tytuł: ' + title + ' treść: ' + text + ' data: ' + date );
   }
    getAllNotes(req, res) {
       //pobieranie notatek
        res.send('API dziala');
    }
    getNote(req, res) {
       //pobieranie notatki
        res.send('Info o notatce');
    }
    updateNote(req, res) {
       //aktualizowanie notatki
        res.send('notatka zaktualizowana');
    }
    deleteNote(req, res) {
        //usuwanie notatki
        const id = req.params.id;
        res.send('notatka usunieta. ID: ' + id );
    }
}
module.exports = new NoteActions();