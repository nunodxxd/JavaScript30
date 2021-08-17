githubClientId = '806341ead4abbdf5945b';
githubSecret = 'fa4de9c98122847f0c0c9a1479cbe1f0290e3620';

const endpoint = `https://api.github.com/repos/nunodxxd/JavaScript30/git/trees/master?=client_id=${githubClientId}&client_secret=${githubSecret}`;

let rawdata = [];
let subfolders = [];
let div = "";

fetch(endpoint)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        
        rawdata.push(...data.tree);
        subfolders = rawdata.filter(x => x.type == "tree");
        subfolders.forEach(function(valor, indice) {
            console.log(valor);
            div += `<a href="${valor.path}"><div class="element"><p>${valor.path}</p></div></a>`;
        });
        document.querySelector("body > div").innerHTML= div;
    })
    .catch((err) => {
        // Do something for an error here
    })

