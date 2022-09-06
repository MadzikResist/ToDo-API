const express = require('express');
const router = express.Router();
const noteActions = require('../actions/api/noteActions')
const userActions = require('../actions/api/userActions')



//pobieranie notatek
router.get('/notes', noteActions.getAllNotes); //pobieranie wszystkich notatek. get - pobieranie zasobów z serwera

//zapisywanie notatek
router.post('/notes', noteActions.saveNote); //post- zapisywanie nowych danych

//edytowanie notatek
router.put('/notes/:id', noteActions.updateNote); //put- edycja danych

//usuwanie notatek
router.delete('/notes/:id', noteActions.deleteNote); //delete- usuwanie danych

//register
router.post('/register', userActions.registerUser)

//login
router.post('/login', userActions.loginUser)

module.exports = router;