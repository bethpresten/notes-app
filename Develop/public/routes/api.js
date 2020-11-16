// utilize the method created inside javascript file in db folder

// buyer, middleman, seller
const express = require("express");
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const notes = [];

fs.readFile("../../db/db.json", 'utf8', (err, data) => {
    if (err) throw (err);
    const notes = JSON.parse(data);
    console.log(data);
})

module.exports = function (app) {
    // API ROUTES/
    app.get("/api/config", (req, res) => {
        res.json({
            success: true,
        });
    });

    app.get("/api/notes", (req, res) => {
        res.send(notes);
    });

    app.post("/api/notes", (req, res) => {
        let createNewNote = req.body;
        createNewNote.id.uuidv4();
        notes.push(createNewNote);
        db.writeData(notes);
        return res.json(notes);
        console.log("new note!")
    });

    app.delete("/api/notes/:id", (req, res) => {
        const notes = db.readData();
        const notesFilter = notes.filter
        db.writeData(notesFilter);
        return res.json(notesFilter);
    });

    // app.listen(PORT, () => {
    //     console.log(`Server is running on http://localhost:${PORT}`);
    // })

}