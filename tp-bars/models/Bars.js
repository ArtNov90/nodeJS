const db = require("../config/database")
const sequelize = require("sequelize")

const Bars = db.define('bars', {
    id: { type: sequelize.INTEGER, autoIncrement : true, primaryKey : true },
    name: { type: sequelize.STRING },
    adresse: { type: sequelize.STRING },
    tel: { type: sequelize.STRING },
    email: { type: sequelize.STRING },
    description: { type: sequelize.STRING },
  })
  
  module.exports = Bars