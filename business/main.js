const express = require("express");
const router = express.Router();
const {addUser,getJSON,modifUser} = require("../data/main");


router.post("/", function (req, res) { // récupère la requète "POST"
    addUser(req.body);
    res.redirect("/index.html");
});
router.get("/", function (req, res) { // récupère la requète "GET"
    res.send(getJSON());
});
router.post("/modif", function (req, res) { // récupère la requète "POST"
    modifUser(req.body);
    res.redirect("/index.html");
});
module.exports = router;
