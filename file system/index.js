const fs = require('fs');

// Exercice 1 : Lire le contenu d'un fichier
const filePath = 'message.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Erreur de lecture du fichier : ${err.message}`);
        return;
    }
    console.log(`Contenu du fichier : \n${data}`);
});