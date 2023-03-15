const express = require("express");
const router = express.Router();
const {addUser,getJSON} = require("../data/main");


router.post("/", function (req, res) { // récupère la requète "POST"
    addUser(req.body);
    res.redirect("/index.html");
});
router.get("/", function (req, res) { // récupère la requète "GET"
    res.send(getJSON());
});
router.put("/", function (req, res) { // récupère la requète "PUT"
    res.send(req.query);
});
module.exports = router;
