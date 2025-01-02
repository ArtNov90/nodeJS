const express = require("express")

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