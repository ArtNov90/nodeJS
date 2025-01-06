const { Users, maxId } = require("../model/User")

const getById = (req, res) => {
  const { id } = req.params

  const user = Users.find((u) => u.id == id)

  if (!user) {
    return res.status(404).json({ message: "User not found !" })
  }

  res.json(user)
}
const search = (req, res) => {
  const { name } = req.query

  const users = Users.filter((u) => u.name.toLowerCase() === name.toLowerCase())

  res.json(users)
}
const index = (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 3
  const data = Users.slice((page - 1) * limit, limit)

  res.json({
    totalePages: Math.round(Users.length / limit),
    currentPage: page,
    limit,
    data,
  })
}
const store = (req, res) => {
  const user = { ...req.body, id: maxId }

  Users.push(user)
  maxId++

  res.json({ message: "User created ! ", user })
}
const update = (req, res) => {
  const { id } = req.params
  const { name, age, email } = req.body
  const user = { name, age, email, id: parseInt(id) }

  const index = Users.findIndex((u) => u.id == id)

  if (index === -1)
    return res.status(404).json({ message: "User not found !" })

  Users[index] = user
}
const destroy = (req, res) => {
  const { id } = req.params

  const index = User.findIndex((u) => u.id === id)

  if (index === -1)
    return res.status(404).json({ message: "User not found !" })

  Users.splice(index, 1)
  res.json({ message: "User deleted !" })
}


module.exports = { getById, search, index, store, update, destroy}