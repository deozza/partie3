const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

async function lireFichier(nomFichier) {
    return await fs.promises.readFile(nomFichier, {encoding: "utf-8"});

    // TODO: récupèrer le contenu du fichier passé en paramètre, avec fs.promises.readFile()

    // TODO: retourner la promesse qui sera résolue en fin de lecture (ou rejetée, en cas d'erreur)

}

(async function (){
    try{
        let content = await lireFichier(fichierSource);
        content = content.toLowerCase();
        console.log(content)
        fs.promises.writeFile(fichierDestination, content, {encoding: "utf8"});
    }catch(error){
        console.log(error)

    }
})()


// TODO: appeler la fonction lireFichier() pour récupérer le contenu de `fichierSource`

// TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable

// TODO: afficher le contenu de cette variable

// TODO: écrire ce contenu modifié dans le fichier `résultat.txt`, avec fs.promises.writeFile()

// TODO: intercepter les erreurs => les afficher dans la sortie d'erreurs
