const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

// TODO: récupèrer dans une variable le contenu du fichier spécifié par `fichierSource`, avec fs.readFileSync()
let contenu = fs.readFileSync(fichierSource, {encoding: "utf-8"});

// TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable
 contenu = contenu.toLowerCase();

// TODO: afficher le contenu de cette variable
 console.log(contenu);

// TODO: écrire ce contenu modifié dans le fichier `résultat.txt`
 fs.writeFileSync(fichierDestination, contenu, {encoding: "utf-8"});
