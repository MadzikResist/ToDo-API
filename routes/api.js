const express = require('express');
const router = express.Router();
const noteActions = require('../actions/api/noteActions')



//pobieranie notatek
router.get('/notes', noteActions.getAllNotes); //pobieranie wszystkich notatek. get - pobieranie zasobów z serwera

//pobieranie notatki
router.get('/notes/:id', noteActions.getNote); //pobieranie pojedynczej notatki

//zapisywanie notatek
router.post('/notes', noteActions.saveNote); //post- zapisywanie nowych danych

//edytowanie notatek
router.put('/notes/:id', noteActions.updateNote); //put- edycja danych

//usuwanie notatek
router.delete('/notes/:id', noteActions.deleteNote); //delete- usuwanie danych


module.exports = router;