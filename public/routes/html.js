var path = require("path");

module.exports = function (app) {
    // VIEW ROUTES
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.html"));
    });
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/public/notes.html"));
    });
};