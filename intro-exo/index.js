const express = require("express")
const app = express()


app.listen(3000, () => {
  console.log("App running on port 3000 !")
})


// Crée une route GET à l'adresse /hello qui retourne le texte suivant :
// "Bonjour, bienvenue dans notre API!"
app.get("/hello", (req, res) => {
  res.send("Bonjour, bienvenue dans notre API!")
})

// Crée une route GET à l'adresse /user/:name qui retourne un message personnalisé :
// "Bonjour, [name]!"
// Remplace [name] par la valeur du paramètre passé dans l'URL.
app.get("/users/:name", (req, res) => {
  res.send(`Bonjour, ${req.params.name}!`)
})


// Crée une route GET à l'adresse /search qui accepte un paramètre de requête query.
// Retourne un message sous forme de texte :
// "Vous avez recherché : [query]"
// Si aucun paramètre query n'est fourni, retourne :
// "Aucune recherche effectuée."
app.get("/search", (req, res) => {
  if (! req.query.query){
    return res.send("Aucune recherche effectuée.")
  }

  res.send(`Vous avez recherché : ${req.query.query}`)
})


// Crée une route GET à l'adresse /product/:category/:id qui retourne un message détaillant la catégorie et l'identifiant du produit :
// "Produit ID [id] dans la catégorie [category]"
// Remplace [id] et [category] par les valeurs des paramètres d'URL.
app.get("/product/:category/:id", (req, res) => {
  const {id, category} = req.params
  res.send(`Produit ID ${id} dans la catégorie ${category}`)
})


// Crée une route GET à l'adresse /api/info qui retourne un objet JSON :
app.get("/api/info", (req, res) => {
  res.json({
    message: "Bienvenue sur notre API !",
    status : "success"
  })
})


// Crée une route GET à l'adresse /welcome qui retourne une réponse HTML :
app.get("/welcome", (req, res) => {
  res.send("<h1>Bienvenue</h1> <p>Fonctionnalités</p>")
})


// Crée une route GET à l'adresse /profile/:username qui accepte un paramètre de requête age.
// Retourne un message personnalisé sous la forme :
// "Profil de [username], âge : [age]"
// Si age n'est pas fourni, retourne :
// "Profil de [username], âge non spécifié."
app.get("/profile/:username" , (req, res) => {
  const {username} = req.params

  res.send(`Profil de ${username}, age ${req?.query?.age ? req.query.age : "non spécifié"} .`)
})



// Crée une route GET à l'adresse /api/users qui accepte un paramètre de requête name.
// Créer une const Users avec 10 utilisateurs dans un tableau 
// Si name est fourni, retourne l'utilisateur dont le name correspond.
// Si aucun utilisateur ne correspond, retourne un message d’erreur JSON

const users = [
  { id: 1, name: "Jean", age: 25 },
  { id: 2, name: "Marie", age: 30 },
  { id: 3, name: "Pierre", age: 35 },
  { id: 4, name: "Sophie", age: 28 },
  { id: 5, name: "Lucas", age: 42 },
  { id: 6, name: "Emma", age: 33 },
  { id: 7, name: "Thomas", age: 39 },
  { id: 8, name: "Julie", age: 27 },
  { id: 9, name: "Nicolas", age: 45 },
  { id: 10, name: "Sarah", age: 31 }
]

app.get("/api/users", (req, res) => {
  const { name } = req.query

  console.log(req.params)
  const user = users.find( (user) => user.name === name)

  if (user) {
    return res.json(user)
  }
  res.json({message : "User not found !"})
})


