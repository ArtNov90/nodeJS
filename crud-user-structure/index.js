const express = require("express")
const app = express()
const userRouter = require("./app/router/userRouter")

app.use(express.json())
app.use(userRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" })
})


app.listen(3000, () => {
  console.log("App running on port 3000 !")
})



// Ajoutez un middleware à toutes les routes pour simuler un retard de 2 secondes avant de répondre, en utilisant setTimeout.
// app.use( (req, res, next) => {
//   setTimeout( () =>{
//     next();
//   }, 2000)
// } )

