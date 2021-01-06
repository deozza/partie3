const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

// TODO: récupèrer dans une variable le contenu du fichier spécifié par `fichierSource`, avec fs.readFile()

fs.readFile(fichierSource,{encoding: "utf-8"}, (err, data) => {
    if (err) throw err;
    let contenu = data.toLowerCase();
    console.log(contenu);
    fs.writeFile(fichierDestination, contenu, {encoding: "utf-8"}, (err) => {
        console.error(err);
    })
});

// TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable

// TODO: afficher le contenu de cette variable

// TODO: écrire ce contenu modifié dans le fichier `résultat.txt`

