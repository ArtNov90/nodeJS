const mongoose = require("mongoose")
const express = require("express")
require("dotenv").config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("Connected")

    app.listen(process.env.PORT, () => {
      console.log("App listening on port 3000")
    })
  }).catch((err) => {
    console.log("Err", err)
  })