// permet de recupérer la ligne client correspondant à l'idée selectionné (avec le bouton)
fetch("/vroom", {
    method: "GET"
})
    .then((request) =>
        request.json())
    .then((data) => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString); // permet de chercher les paramètre dans l'URL
        const id = urlParams.get("id"); // récupere l'id qui se trouctrouve dans l'URL
        let user = data[id-1]; // stocke dans user la ligne du JSON correspondant à l'id choisit
        pre_rempli_JS(user);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

function pre_rempli_JS(options)
{
    let last = document.getElementById("last"); // récupère l'id 
    let first = document.getElementById("first");
    let email = document.getElementById("email");
    let company = document.getElementById("company");
    let country = document.getElementById("country");
    last.value = options.last; // ajouter un "value" à l'input coté HTML
    first.value = options.first;
    email.value = options.email;
    company.value = options.company;
    country.value = options.countrys;
} 