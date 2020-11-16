const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("/public"));

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// // 1. Require Express
// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const app = express();

// const PORT = process.env.PORT || 3000;

// // const note = require("../assets/js/index");

// // 5. Add middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // ================
// const { v4: uuidv4 } = require('uuid');
// // uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
// // ===============

// // newNote.id = uuidv4();
// // console.log(newNote);

// // 4. Listen on the PORT.
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

