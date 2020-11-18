// require express and calling express
const express = require("express");
const app = express();
// creating a PORT
const PORT = process.env.PORT || 8080;
// requiring path and fs
const path = require("path");
const fs = require("fs");
// requiring uuid for the unique id package
const { v4: uuidv4 } = require("uuid");
const notesArray = [];

// dynamic middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static middleware
app.use(express.static("public"));


// html routes / notes route
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/views/notes.html"));
});

// html route for the catch all or the index in this app
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/views/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// API ROUTES/
// test api route
app.get("/api/config", (req, res) => {
    return res.json({
        success: true,
    });
});

// resource for the notes file/ api call
app.get("/api/notes", (req, res) => {
    return res.json(JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json"))));
});

// post
app.post("/api/notes", (req, res) => {
    // create a variable to hold the parameters
    let createNewNote = req.body;
    // returning a random id number
    createNewNote.id = uuidv4();
    // reading the file
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json')));
    // pushing the new note 
    notes.push(createNewNote);
    // notes.push(createNewNote);
    // writing the new db.json file
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notes));
    // console.log("new note!");
    // responding to the newly written file
    return res.json(notes);
});


// targeting the specific note to the delete (this was hard!!!!)
app.delete("/api/notes/:id", (req, res) => {
    // identifying the id through the params
    let id = parseInt(req.params.id);
    // console.log(id);
    // identifying a variable to the reading the db.json
    const notesToDelete = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json')));
    // filtering the individual notes' id
    let deleteNote = notesToDelete.filter(note => note.id != id);
    // identifying the specific id to delete the note
    deleteNote.filter(element => element.id = deleteNote.indexOf(element));
    // notesToDelete.splice(id, deleteNote)
    // re-writing the file with the deleted note
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
    // returning the response
    return res.json(notesToDelete);
});



