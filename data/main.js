// --------------- MODULES IMPORT ---------------

const fs = require("fs");

// --------------- RECUP POST INFORMATION ---------------

const addUser = (options) => {
    const fileData = fs.readFileSync("./data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);
    if(JSONData.length == 0)
    {
        options.id = 1; // quand le tableau est vide, stocke 1 dans l'id
    }
    else
    {
        options.id = Math.max(...JSONData.map(e => e.id)) + 1; // ajouter l'id : incrémente l'id par rapport au client précédent
    }
    options.created_at = (new Date()).toUTCString(); // ajouter la date de création du client
    JSONData.push(options);
    fs.writeFileSync("./data/info.json", JSON.stringify(JSONData)); // save it
};
const modifUser = (options) => {
    const fileData = fs.readFileSync("./data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);
    
    JSONData[options.id-1].last = options.last; // Permet d'écrire par dessus les champs existants
    JSONData[options.id-1].first = options.first;
    JSONData[options.id-1].email = options.email;
    JSONData[options.id-1].company = options.company;
    JSONData[options.id-1].country = options.country;
    
    fs.writeFileSync("./data/info.json", JSON.stringify(JSONData)); // save it
};
const deleteUser = (options) => {
    // supprime un utilisateur
    console.log(`On va supprimer le client portant l'id : ${options.id}`);
    const fileData = fs.readFileSync("./data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);
    JSONData.splice(options.id-1,1); // supprime "1" élément en position "options.id-1" 
    fs.writeFileSync("./data/info.json", JSON.stringify(JSONData)); // save it
};
const getJSON = () => {
    // renvoie le JSON intact
    const fileData = fs.readFileSync("./data/info.json", "utf-8").toString();
    return fileData;
};
module.exports = {addUser,getJSON,modifUser,deleteUser}; // permet de pouvoir exporter les fonctions dans d'autres fichier
