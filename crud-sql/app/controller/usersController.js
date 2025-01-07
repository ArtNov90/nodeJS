const User = require("../model/User")

const getById = (req, res) => {
  const { id } = req.params

  User.findByPk(parseInt(id)).then((user) =>
    {
      if (user) {
        res.status(200).json(user)  
      } else {
        res.status(404).json({ message: "User not found" })  
      }
    })
    .catch((error) => {
      console.error("Error retrieving user by ID:", error)
      res.status(500).json({ message: "An error occurred while retrieving the user" })
    })
    

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

const update = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByPk(parseInt(id))
    if (!user) {
      return res.status(404).json({ message: "User not found !" })
    }

    await user.update(req.body)
    res.json({message : "User updated successfully !"})
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }

}



module.exports = { getById, getAll, create, update}