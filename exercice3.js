const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

function lireFichier(nomFichier, callback) {

    fs.readFile(nomFichier, {encoding: "utf-8"}, function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

lireFichier(fichierSource,function (err, content) {
    if(err !== null){
        console.error(err)
        return;
    }

    content = content.toLowerCase();
    console.log(content);

    fs.writeFile(fichierDestination, content, {encoding: "utf-8"}, (err) => {
        console.error(err);
    });
})

// TODO: appeler la fonction lireFichier() pour récupérer le contenu de `fichierSource`

// TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable

// TODO: afficher le contenu de cette variable

// TODO: écrire ce contenu modifié dans le fichier `résultat.txt`

// TODO: intercepter les erreurs => les afficher dans la sortie d'erreurs
