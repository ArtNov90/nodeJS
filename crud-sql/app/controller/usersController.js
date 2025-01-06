const User = require("../model/User")

const getById = (req, res) => {
  const { id } = req.params

}

const getAll = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users)
    })
    .catch((error) => {
      console.error("Error retrieving users:", error)
      res.status(500).json({ message: "An error occurred while retrieving users" })
    })
}

const create = (req, res) => {
  const { name, age } = req.body

  User.create({ name, age })
    .then((user) => {
      res.status(201).json(user)
    })
    .catch((error) => {
      console.error("Error creating user:", error)
      res.status(500).json({ message: "An error occurred while creating the user" })
    })
}



module.exports = { getById, getAll, create}