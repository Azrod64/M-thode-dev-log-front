const express = require("express");
const router = express.Router();
const {addUser,getJSON,modifUser,deleteUser} = require("../data/main");// récuperer les fonctions de ../data


router.post("/", function (req, res) { // récupère la requète "POST"
    addUser(req.body);
    res.redirect("/index.html");
});
router.get("/", function (req, res) { // récupère la requète "GET"
    res.send(getJSON());
});
router.post("/modif", function (req, res) { // récupère la requète "POST"
    console.log(req.body);
    if(req.body.changement == "modifier") // attention, il peut ne pas y etre, cela peut provoquer des erreurs
    {
        modifUser(req.body);// fonction qui modifie un user 
    }
    else
    {
        deleteUser(req.body);// fonction qui delete un user
    }
    res.redirect("/index.html");
});
module.exports = router;
