// --------------- MODULES IMPORT ---------------

const fs = require("fs");

// --------------- RECUP POST INFORMATION ---------------

const addUser = (options) => {
    const fileData = fs.readFileSync("./data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);
    if(JSONData.length == 0)
    {
        options.id = 1;
    }
    else
    {
        options.id = JSONData[JSONData.length - 1].id + 1; // ajouter l'id : incrémente l'id du client précédent
    }
    options.created_at = (new Date()).toUTCString(); // ajouter la date de création du client
    JSONData.push(options);
    fs.writeFileSync("./data/info.json", JSON.stringify(JSONData)); // save it
};
const modifUser = (options) => {
    const fileData = fs.readFileSync("./data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);

    JSONData[options.id-1].last = options.last;
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
module.exports = {addUser,getJSON,modifUser,deleteUser};
