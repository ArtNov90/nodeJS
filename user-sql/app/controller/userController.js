const User = require("../model/User")

const create = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json(user)
}


module.exports = { create }