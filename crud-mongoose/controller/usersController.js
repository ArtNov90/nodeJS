const User = require("../model/User")

app.post("/users", (req, res) => {

  console.log(req.body)

  User.create(req.body)
    .then((user) => {
      res.status(201).json({ message: "User created !", user })
    }).catch((err) => {
      res.status(500).json({ message: "Internal server error !" })
    })
})

app.get("/users", async (req, res) => {
    try {
      const users = await User.find()
     res.json(users)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })
  
  app.get("/users/:id", async (req, res) => {
    const {id } = req.params
  
    try {
      const product = await Product.findById(id)
      res.json(product)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })
  
  app.put("/users/:id", async (req, res) => {
    const {id } = req.params
  
    try {
      const user = findByIdAndUpdate(id, req.body)
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })
  
  app.delete("/users/:id", async (req, res) => {
    const {id } = req.params
  
    try {
      const user = findByIdAndDelete(id)
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })