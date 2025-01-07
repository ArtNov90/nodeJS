const { Worker } = require("worker_threads");

// Création d'un worker et envoi de deux nombres via workerData
const worker = new Worker("./sumWorker.js", {
  workerData: { num1: 7, num2: 15 } // Données envoyées au worker
});

// Écoute du message de réponse du worker
worker.on("message", (result) => {
  console.log(result);
});

// Gestion des erreurs
worker.on("error", (err) => {
  console.error("Erreur du worker :", err);
});

// Gestion de la fin du worker
worker.on("exit", (code) => {
  if (code !== 0) {
    console.error(`Worker terminé avec code ${code}`);
  }
});
