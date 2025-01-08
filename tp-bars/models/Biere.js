const db = require("../config/database")
const sequelize = require("sequelize")

const Biere = db.define('biere', {

    id: { type: sequelize.INTEGER, autoIncrement : true, primaryKey : true },
    name: { type: sequelize.STRING },
    description: { type: sequelize.STRING },
    degree: { type: sequelize.FLOAT },
    prix: { type: sequelize.FLOAT },
    bars_id: { type: sequelize.INTEGER, references: {
            model: 'bars', // Nom de la table liée (assurez-vous qu'il correspond à celui dans votre base de données)
            key: 'id',     // Champ de la table 'bars' pour la relation
          },}
    
})
  
  module.exports = Biere