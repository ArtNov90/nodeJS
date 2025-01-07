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
module.exports = User
