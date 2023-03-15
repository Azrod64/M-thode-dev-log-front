const express = require("express");
const router = express.Router();
const {addUser,getJSON} = require("../data/main");


router.post("/", function (req, res) { // récupère la requète "POST"
    addUser(req.body);
    res.redirect("/index.html");
});
router.get("/", function (req, res) { // récupère la requète "POST"
    res.send(getJSON());
});
module.exports = router;
