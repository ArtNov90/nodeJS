//Exercice 1

const { exec } = require('child_process');

// Détermine la commande selon le système d'exploitation
const command = process.platform === 'win32' ? 'dir' : 'ls';

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erreur : ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr : ${stderr}`);
        return;
    }
    console.log(`Résultat : \n${stdout}`);
});

 //Exercice 2
 const { spawn } = require('child_process');

 // Démarre un processus enfant avec Node.js
 const child = spawn('node', ['-i']); // Mode interactif
 
 // Envoie une commande au processus enfant
 child.stdin.write("console.log('Hello from child!')\n");
 child.stdin.end();
 
 // Capture la sortie du processus enfant
 child.stdout.on('data', (data) => {
     console.log(`Sortie du processus enfant : ${data}`);
 });
 
 // Capture les erreurs éventuelles
 child.stderr.on('data', (data) => {
     console.error(`Erreur : ${data}`);
 });
 
 // Signale la fin du processus
 child.on('close', (code) => {
     console.log(`Processus enfant terminé avec le code : ${code}`);
 });
