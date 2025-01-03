const express = require("express")

const app = express()
const router = require("./app/router/productRouter")


app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log("App listening on port 3000!")
})

