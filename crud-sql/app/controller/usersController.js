const User = require("../model/User")

const getById = (req, res) => {
  const { id } = req.params

}

const getAll = (req, res) => {
}

const create = (req, res) => {
  User.create({ 
    name: "toto",
    age : 52,
  }).then( (result) => {
    res.status(201).json(result)
  })
}



module.exports = { getById, getAll, create}