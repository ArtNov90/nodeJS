const express = require("express")
<<<<<<< HEAD
const app = express()
const port = 3000


app.use(express.json())
app.listen(port,() => {
  console.log("App running on port 3000")
})

app.get("/hello", (req, res) => {
    res.send("Bonjour, bienvenue dans notre API!")
  })

app.get("/user/:name", (req, res) => {
const name = req.params.name;
res.send(`Bonjour, ${name}!`);
})

app.get("/search", (req, res) => {
const query = req.query.query;
    if (query) {
        res.send(`Vous avez recherché : ${query}`);
    } else {
    res.send("Aucune recherche effectuée.");
    }
})  

app.get("/product/:category/:id", (req, res) => {
    const { category, id } = req.params;
    res.send(`Produit ID ${id} dans la catégorie ${category}`);
  })

app.get("/api/info", (req, res) => {
    res.json({ message: "Bienvenue dans notre API !", statut: "success" });
})
  
=======

const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log("App running on port 3000")
})


app.get("/", (req, res) => {
  res.send("Hello world !")
})

app.get("/html", (req, res) => {
  res.send("<h1>Hello world !</h1>")
})

app.get("/json", (req, res) => {

  const user = {
    name: "Jhon",
    surname : "Doe",
    age : 55
  }

  res.json(user)
})


// localhost:3000/query-param?name=valeur
app.get("/query-param", (req, res) => {
  const { name } = req.query
  res.json({ message : "Hello " + name})
})


// localhost:3000/path-param/fezi-dfsd-fdsfez-5458

app.get("/path-param/:id/:username", (req, res) => {
  const { id, username } = req.params
  res.json({ id : "Hello " + username +  " Your id is " + id})
})


app.post("/send-body", (req, res) => {
  console.log(req.body.name)

  res.json({message : "Body recieved"})
})
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
