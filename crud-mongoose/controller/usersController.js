const { query } = require("express")
const User = require("../model/User")

app.post("/users", (req, res) => {

  console.log(req.body)

  User.create(req.body)
    .then((user) => {
      res.status(201).json({ message: "User created !", user })
    }).catch((err) => {
      res.status(500).json({ message: "Internal server error !" })
    })
})

app.get("/users", async (req, res) => {
    try {
      const users = await User.find()
     res.json(users)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })
  
  app.get("/users/:id", async (req, res) => {
    const {id } = req.params
  
    try {
      const users = await User.findById(id)
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })
  
  app.put("/users/:id", async (req, res) => {
    const {id } = req.params
  
    try {
      const user = findByIdAndUpdate(id, req.body)
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })
  
  app.delete("/users/:id", async (req, res) => {
    const {id } = req.params
  
    try {
      const user = findByIdAndDelete(id)
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" })
    }
  })

  const update = (req, res) => {
    // Utilisation de `updateOne` pour mettre à jour un seul document
    User.updateOne({ _id: req.params.id }, req.body)
      .then((queryResult) => {
        // Si aucun utilisateur n'a été trouvé
        if (queryResult.matchedCount === 0) {
          return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
  
        // Si l'utilisateur a été mis à jour avec succès
        res.status(200).json({ message: "Utilisateur mis à jour avec succès !" });
      })
      .catch((err) => {
        // En cas d'erreur
        console.error("Erreur lors de la mise à jour de l'utilisateur:", err);
        res.status(500).json({ message: "Erreur interne du serveur" });
      });
  };

  const destroy = (req, res) => {
    // Utilisation de `deleteOne` pour supprimer un document basé sur son ID
    User.deleteOne({ _id: req.params.id })
      .then((queryResult) => {
        // Si aucun utilisateur n'a été trouvé pour suppression
        if (queryResult.deletedCount === 0) {
          return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
  
        // Si l'utilisateur a été supprimé avec succès
        res.status(200).json({ message: "Utilisateur supprimé avec succès !" });
      })
      .catch((err) => {
        // En cas d'erreur
        console.error("Erreur lors de la suppression de l'utilisateur:", err);
        res.status(500).json({ message: "Erreur interne du serveur" });
      });
  };