const { parentPort } = require("worker_threads");

// Écoute des messages envoyés par le thread principal
parentPort.on("message", (value) => {
  const result = value * 2;
  parentPort.postMessage(`Le double de ${value} est : ${result}`);
});
