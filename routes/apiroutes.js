const router = require('express').Router();
const noteData = require("../db/noteData");
const db = require('../db/db.json')
const fs = require('fs')
const path = require('path');
const filePath = path.join(__dirname, "../db/db.json");
var uuidv1 = require('uuidv1')

//display all notes
router.get("/notes", (req, res) => {
   return res.json(db)
    //noteData
      //  .getNotes()
        //.then((notes) => res.json(notes))
        //.catch((err) => res.status(500).json(err))
})

//create new note
router.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv1();
    db.push(newNote);
    fs.writeFile(filePath, JSON.stringify(db), err => {
        if (err) throw err;
        console.log("note added");
    })
    res.send(newNote);
})
//delete note @ clicked position
router.delete('notes/:id', (req, res) => {
    const noteId = req.params.id
})
//display single note
router.get('notes/:note', (req, res) => {
    const chosenNote = req.params.note;
})
module.exports = router;