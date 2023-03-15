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
    // modification user
};
const deleteUser = (options) => {
    // supprime un utilisateur
};
const getJSON = () => {
    // renvoie le JSON intact
    const fileData = fs.readFileSync("./data/info.json", "utf-8").toString();
    return fileData;
};
module.exports = {addUser,getJSON,modifUser};
