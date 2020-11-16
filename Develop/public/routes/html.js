const path = require("path");
const express = require("express");
const app = express();

module.exports = function (app) {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/notes.html"));
    });

    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });
}