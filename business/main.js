const express = require("express");
const router = express.Router();
const {addUser,getJSON,modifUser,deleteUser,check_field} = require("../data/main");// récuperer les fonctions de ../data


router.post("/", function (req, res) { // récupère la requète "POST"
    if(check_field(req.body) == 1) // permet de vérifier le champ email
    {
        addUser(req.body);
    }
    else
    {
        console.log("Impossible car les champs sont mal rensigné");
        // dire à l'utilisateur qu'il y a eu un problème
    }
    res.redirect("/index.html");
});
router.get("/", function (req, res) { // récupère la requète "GET"
    res.send(getJSON());
});
router.post("/modif", function (req, res) { // récupère la requète "POST"
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
