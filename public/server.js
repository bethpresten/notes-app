// 1. Require Express
const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();

const PORT = process.env.PORT || 3000;

// 5. Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VIEW ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// API ROUTES
app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

app.get("/api/notes", (req, res) => {
    res.json(note);
});

app.get("/api/*", (req, res) => {
    res.json(note);
});

// app.get("/api/notes/:name", (req, res) => {
//     for (let i = 0; i < notes.length; i++) {
//         if (notes[i].name === req.params.name) {
//             return res.json(notes[i]);
//         }
//     }
// });

// app.post("/api/notes", (req, res) => {
//     donuts.push(req.body);
//     res.json(donuts);
// });

// 4. Listen on the PORT.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

