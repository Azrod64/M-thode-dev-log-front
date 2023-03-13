// --------------- MODULES IMPORT ---------------


const express = require("express");
const fs = require("fs");

// --------------- SERVER SETUP ---------------


const app = express();
const port = 3000;  // Localhost Port


app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});

app.use(express.static("public"));

// --------------- RECUP POST INFORMATION ---------------


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/index.html", function (req, res) {
    console.log(req.body);
    console.log(req.body.first);
    changeJSON(req.body);
    res.redirect("/index.html");
});
function changeJSON(options) {
    const fileData = fs.readFileSync("/home/azrod/Documents/GitHub/M-thode-dev-log-front/public/info.json");
    let JSONData = JSON.parse(fileData);
    let newUser = Object.assign(options);

    newUser.id = JSONData[JSONData.length-1].id + 1;
    
    newUser.created_at = new Date();
    JSONData.push(newUser);

    fs.writeFileSync("/home/azrod/Documents/GitHub/M-thode-dev-log-front/public/info.json", JSON.stringify(JSONData) ); // save it
}

