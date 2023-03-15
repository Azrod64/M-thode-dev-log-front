const express = require("express");
const router = express.Router();
const {addUser,getJSON,modifUser,deleteUser} = require("../data/main");


router.post("/", function (req, res) { // récupère la requète "POST"
    addUser(req.body);
    res.redirect("/index.html");
});
router.get("/", function (req, res) { // récupère la requète "GET"
    res.send(getJSON());
});
router.post("/modif", function (req, res) { // récupère la requète "POST"
    if(req.body.changement == "modifier") // attention, il peut ne pas y etre, cela peut provoquer des erreurs
    {
        
        modifUser(req.body);
    }
    else
    {
        deleteUser(req.body);
    }
    res.redirect("/index.html");
});
module.exports = router;
