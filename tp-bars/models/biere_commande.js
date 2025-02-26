const db = require("../config/database")
const sequelize = require("sequelize")

const BiereCommande = db.define('biere-commande', {

    biere_id: { type: sequelize.INTEGER,  references: {
        model: 'biere',  // Nom de la table 'biere' à lier
        key: 'id',       // Champ de la table 'biere' pour la relation
      }, },
    commande_id: { type: sequelize.INTEGER,  references: {
        model: 'commande',  // Nom de la table 'biere' à lier
        key: 'id',       // Champ de la table 'biere' pour la relation
      }, }
    
    
    
})
  
  module.exports = BiereCommande