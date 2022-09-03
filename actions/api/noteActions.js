const Note = require('../../db/models/note');

class NoteActions  {
   async saveNote(req, res){
       const title = req.body.title;
       const text = req.body.text;
       const date = req.body.date;
       const done = req.body.done;

       let note;
       try{
           note = new Note({title, text, date, done});
           await note.save();
       } catch (err) {
           return res.status(422).json({message: err.message});
       }


       res.status(200).json(note);
   }

    //pobieranie notatek
    async getAllNotes(req, res) {
        //  obsluga bledow
       //  let doc;
       //  try{
       //     doc = await Note.find({});
       //  } catch(err){
       //     return res.status(500).json({message: err.message});
       //  }
        const doc = await Note.find({}).sort({date:1});
        res.status(201).json(doc);
    }

    //aktualizowanie notatki
    async updateNote(req, res) {
        const id = req.params.id;
        const title = req?.body?.title;
        const text = req?.body?.text;
        const date = req?.body?.date;
        const done = req.body.done;

        if(!text){
            console.log(done)
            const note = await Note.findByIdAndUpdate(id,{$set:{
                    done
                }},{new: true});
            res.status(201).json(note);
            return
        }
        const note = await Note.findByIdAndUpdate(id,{$set:{
            title,
            text,
            date,
            done
        }},{new: true});

        res.status(201).json(note);
    }
    //usuwanie notatki
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({_id : id});

        res.sendStatus(204); // wszystko zostalo wykonane ale nic nie jest zwracane
    }
}
module.exports = new NoteActions();