const { Worker } = require("worker_threads");

// Fonction pour calculer la somme des carrés dans le thread principal
function sumSquaresInMain(maxNum) {
  let sum = 0;
  for (let i = 1; i <= maxNum; i++) {
    sum += i * i;
  }
  return sum;
}

// Fonction pour exécuter le worker et obtenir la somme des carrés
function sumSquaresWithWorker(maxNum) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("../worker/sumSquare.js", {
      workerData: maxNum,
    });

    worker.on("message", (result) => {
      resolve(result);
    });

    worker.on("error", (err) => {
      reject(err);
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker terminé avec code ${code}`));
      }
    });
  });
}

// Comparaison des temps d'exécution entre le thread principal et le worker
async function compareExecutionTimes() {
  const maxNum = 10000000; // 10 millions
  const startMain = Date.now();
  const mainResult = sumSquaresInMain(maxNum);
  const endMain = Date.now();
  console.log(`Résultat du thread principal : ${mainResult}`);
  console.log(`Temps d'exécution dans le thread principal : ${endMain - startMain} ms`);

  const startWorker = Date.now();
  const workerResult = await sumSquaresWithWorker(maxNum);
  const endWorker = Date.now();
  console.log(`Résultat du worker : ${workerResult}`);
  console.log(`Temps d'exécution dans le worker thread : ${endWorker - startWorker} ms`);
}

compareExecutionTimes();
