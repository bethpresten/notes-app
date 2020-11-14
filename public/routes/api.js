// utilize the method created inside javascript file in db folder

// buyer, middleman, seller



// API ROUTES/
app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

app.get("/api/notes", (req, res) => {
    res.json({
        notes: newNote,
    });
});

app.get("/api/*", (req, res) => {
    res.json(note);
});

app.get("/api/notes/:name", (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].name === req.params.name) {
            return res.json(notes[i]);
        }
    }
});

app.post("/api/notes", (req, res) => {
    donuts.push(req.body);
    res.json(donuts);
});