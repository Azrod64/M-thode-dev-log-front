// --------------- MODULES IMPORT ---------------


const express = require("express");


// --------------- SERVER SETUP ---------------


const app = express();
const port = 3000;  // Localhost Port



app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});

app.use(express.static("public"));

