const db = require("../config/database")
const { DataTypes } = require("sequelize")

const User = db.define('user', {
  name: { 
    type: DataTypes.TEXT,
   // allowNull: false  // Assure que le champ est obligatoire
  },
  age: { 
    type: DataTypes.INTEGER,
    //allowNull: false
  }
})

// Synchronisation de la table avec la base de données
;(async () => {
  try {
    await db.sync({ force: true })  // Recréé la table (force = true écrase la table existante)
    console.log("User table created successfully.")
  } catch (error) {
    console.error("Error syncing database:", error)
  }
})()

module.exports = User
