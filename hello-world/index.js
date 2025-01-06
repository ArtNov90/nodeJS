<<<<<<< HEAD
=======
// npm init -d
// npm install express nodemon
// "start": "node index.js"
// "dev": "nodemon index.js"
// npm run start

>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
const express = require("express")

const app = express()


app.listen(3000, () => {
  console.log("App running on port 3000")
})

app.get("/", (req, res) => {
  res.send("Hello world !")
<<<<<<< HEAD

  app.get('/hello', (req, res) => {
    res.send('Bonjour, bienvenue dans notre API!');
});

=======
>>>>>>> dd039dd4a2b5f31c54defff33f16f1349d9498e8
})