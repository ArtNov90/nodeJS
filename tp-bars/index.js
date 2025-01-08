const express = require("express")
const barsRouter = require("./router/barsRouter")
const biereRouter = require("./router/biereRouter")
const commandeRouter = require("./router/commandeRouter")

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(barsRouter)
app.use(biereRouter)
app.use(commandeRouter)

app.set("view engine", "ejs")
app.set("views")

app.get("/", (req, res) => {
  res.render("index", { variable : "Ma variable"})
})


app.listen(3000, () => {
  console.log("App started")
})