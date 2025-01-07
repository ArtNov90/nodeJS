const Sequelize = require("sequelize");

// Créer une instance Sequelize
const db = new Sequelize({
  dialect: "sqlite", 
  storage: "./db.sqlite" // Chemin vers la base de données SQLite
});

// Synchroniser la base de données
db.sync()
  .then(() => console.log("Base de données synchronisée"))
  .catch(err => console.error("Erreur de synchronisation:", err));

module.exports = db;