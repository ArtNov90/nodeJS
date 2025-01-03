const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log("App running on port 3000 !")
})

const Users = [
  { id: 1, name: "Jean", age: 25, email: "jean@email.com" },
  { id: 2, name: "Marie", age: 30, email: "marie@email.com" },
  { id: 3, name: "Pierre", age: 35, email: "pierre@email.com" },
  { id: 4, name: "Sophie", age: 28, email: "sophie@email.com" },
  { id: 5, name: "Lucas", age: 42, email: "lucas@email.com" },
  { id: 6, name: "Emma", age: 33, email: "emma@email.com" },
  { id: 7, name: "Thomas", age: 39, email: "thomas@email.com" },
  { id: 8, name: "Julie", age: 27, email: "julie@email.com" },
  { id: 9, name: "Nicolas", age: 45, email: "nicolas@email.com" },
  { id: 10, name: "Sarah", age: 31, email: "sarah@email.com" }
]

app.get("/users/:id", (req, res) => {
  const { id } = req.params

  const user = Users.find( (u) => u.id == id)

  if (!user){
    return res.status(404).json({ message : "User not found !" })
  }

  res.json(user)
})

app.get("/users", (req, res) => {
  res.json(Users)
})
