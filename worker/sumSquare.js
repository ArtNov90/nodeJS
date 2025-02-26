const { parentPort, workerData } = require("worker_threads");

// Fonction pour calculer la somme des carrés des entiers entre 1 et workerData (le nombre max)
function sumSquares(maxNum) {
  let sum = 0;
  for (let i = 1; i <= maxNum; i++) {
    sum += i * i;
  }
  return sum;
}

// Calcul et envoi du résultat au thread principal
const result = sumSquares(workerData);
parentPort.postMessage(result);
