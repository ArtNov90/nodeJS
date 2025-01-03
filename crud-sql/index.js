const express = require("express")

const app = express()
const router = require("./app/router/productRouter")
require("dotenv").config()

const PORT = process.env.PORT


app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

