const express = require("express")
const app = express()


app.use(express.json())


// Ajoutez un middleware à toutes les routes pour simuler un retard de 2 secondes avant de répondre, en utilisant setTimeout.
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 2000)
})

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
let maxId = 11



const nameIsPresent = (req, res, next) => {
  const { name } = req.body

  if (!name || typeof name != 'string' || name === '') {
    return res.status(400).json({ message: "Name must be present" })
  }

  next()
}

const ageIsPresentAndPositive = (req, res, next) => {
  const { age } = req.body

  if (!age || typeof age != 'number' || age < 0) {
    return res.status(400).json({ message: "Age must be present and positive" })
  }

  next()
}


// Créez une route GET sur l’URL /users/search qui accepte un paramètre de requête name.
// Retournez tous les utilisateurs dont le nom correspond (insensible à la casse).
// Si aucun utilisateur ne correspond, retournez un tableau vide.
// Exemple de requête :
// GET /users/search?name=Alice
app.get("/users/search", (req, res) => {
  const { name } = req.query

  const users = Users.filter((u) => u.name.toLowerCase() === name.toLowerCase())

  res.json(users)
})



app.get("/users/:id", (req, res) => {
  const { id } = req.params

  const user = Users.find((u) => u.id == id)

  if (!user) {
    return res.status(404).json({ message: "User not found !" })
  }

  res.json(user)
})


// Ajoutez une fonctionnalité de pagination à la route GET /users.
// Acceptez deux paramètres de requête : page (numéro de page) et limit (nombre d’éléments par page).
// Retournez uniquement les utilisateurs correspondant à la page demandée.
// Exemple de requête :
// GET /users?page=1&limit=2
app.get("/users", (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 3
  const data = Users.slice((page - 1) * limit, limit)

  res.json({
    totalePages: Math.round(Users.length / limit),
    currentPage: page,
    limit,
    data,
  })
})



// Créez une route POST sur l’URL /users qui accepte un objet JSON dans le corps de la requête pour ajouter un nouvel utilisateur.
// Le JSON doit inclure name et age.
// Assurez-vous que l'ID de l'utilisateur est généré automatiquement (par exemple, incrémenté à partir de l'ID le plus élevé).
// Retournez l'utilisateur nouvellement ajouté avec un statut 201.

app.post("/users", [nameIsPresent, ageIsPresentAndPositive], (req, res) => {
  const user = { ...req.body, id: maxId }

  Users.push(user)
  maxId++

  res.json({ message: "User created ! ", user })
})


// Créez une route PUT sur l’URL /users/:id pour mettre à jour les informations d’un utilisateur existant.
// Si l’utilisateur est trouvé, mettez à jour ses informations (name, age) à partir du corps de la requête.
// Si l'utilisateur n'existe pas, renvoyez une erreur 404.
// Retournez les informations mises à jour de l’utilisateur.
app.put("/users/:id", [nameIsPresent, ageIsPresentAndPositive], (req, res) => {
  const { id } = req.params
  const { name, age, email } = req.body
  const user = { name, age, email, id: parseInt(id) }

  const index = Users.findIndex((u) => u.id == id)

  if (index === -1)
    return res.status(404).json({ message: "User not found !" })

  Users[index] = user
})


// Créez une route DELETE sur l’URL /users/:id pour supprimer un utilisateur existant.
// Si l'utilisateur n'existe pas, renvoyez une erreur 404.
app.delete("/users", (req, res) => {
  const { id } = req.params

  const index = User.findIndex((u) => u.id === id)

  if (index === -1)
    return res.status(404).json({ message: "User not found !" })

  Users.splice(index, 1)
  res.json({ message: "User deleted !" })
})

// Ajoutez un middleware qui intercepte les routes non définies et retourne une erreur 404 avec un message d’erreur:
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" })
})
