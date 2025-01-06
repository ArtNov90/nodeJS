const express = require("express")

const app = express()
<<<<<<< HEAD
const router = require("./app/router/usersRouter")
=======
const router = require("./app/router/productRouter")
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
require("dotenv").config()

const PORT = process.env.PORT


app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
<<<<<<< HEAD
})
=======
})

>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
