const { parentPort, workerData } = require("worker_threads");

// Récupération des données envoyées par le thread principal
const { num1, num2 } = workerData;

// Calcul de la somme
const sum = num1 + num2;

// Envoi du résultat au thread principal
parentPort.postMessage(`La somme de ${num1} et ${num2} est : ${sum}`);
