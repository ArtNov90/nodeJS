const express = require("express")
const app = express()
const userRouter = require("./app/router/userRouter")



app.use(express.json())
app.use(userRouter)

app.listen(3000, () => {
  console.log("App listening on port 3000!")
})

