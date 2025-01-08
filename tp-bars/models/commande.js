const db = require("../config/database")
const sequelize = require("sequelize")

const Commande = db.define('commande', {

    id: { type: sequelize.INTEGER, autoIncrement : true, primaryKey : true },
    name: { type: sequelize.STRING },
    prix: { type: sequelize.FLOAT, validate: {
        min: 0, }},
    bars_id: { type: sequelize.INTEGER, references: {
        model: 'bars', // Nom de la table liée (assurez-vous qu'il correspond à celui dans votre base de données)
        key: 'id',     // Champ de la table 'bars' pour la relation
      },},
      date: { type: sequelize.DATE },
      status: { type: sequelize.STRING, validate: {
        isIn: [['en cours', 'terminée']], // Validation des valeurs possibles
      }, }
    
    
})
  
  module.exports = Commande