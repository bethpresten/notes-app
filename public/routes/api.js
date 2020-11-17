// utilize the method created inside javascript file in db folder

// buyer, middleman, seller
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const dbFile = require('../../db/db.json')
const { v4: uuidv4 } = require("uuid");
const notes = [];

function readNotes() {
    fs.readFile(dbFile, "ut8", (err, data) => {
        if (err) throw (err);
        const notes = JSON.parse(data);
        console.log(data);
    })
}

module.exports = function (app) {
    // API ROUTES/
    app.get("/api/config", (req, res) => {
        res.json({
            success: true,
        });
    });

    app.get("/api/notes", (req, res) => {
        return res.json(JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'))));
    });


    app.get('/api/notes/:id', function (req, res) {
        var notes = req.params.notes;
        console.log(notes);
        for (let i = 0; i < notes.length; i++) {
            if (notes === notes[i].routeName) {
                return res.json(notes[i]);
            }
        }
    });

    app.post("/api/notes", (req, res) => {
        let createNewNote = req.body;
        createNewNote.id = uuidv4();

        const dbFile = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')));

        createNewNote.id = uuidv4();
        // notes.push(createNewNote);
        fs.writeFileSync(path.join(__dirname, "db/db.json"), JSON.stringify(notes));
        console.log("new note!");
        res.json({
            isError: false,
            message: "Your note has been saved.",
            port: PORT,
            status: 200,
            success: true
        });
    });

    app.delete("/api/notes/:id", (req, res) => {
        let id = parseInt(req.params.id);
        let deleteNote = notesArray.filter(item => item.id != id);

        deleteNote.forEach(element => element.id = deleteNote.indexOf(element));


    });


}