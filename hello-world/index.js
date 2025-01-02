// npm init -d
// npm install express nodemon
// "start": "node index.js"
// "dev": "nodemon index.js"
// npm run start

const express = require("express")

const app = express()


app.listen(3000, () => {
  console.log("App running on port 3000")
})

app.get("/", (req, res) => {
  res.send("Hello world !")
})