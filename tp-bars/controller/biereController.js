const Biere = require("../models/biere");

// Afficher un bar spécifique (show)
const show = (req, res) => {
    Biere.findByPk(parseInt(req.params.id))
      .then((biere) => {
          if (biere) {
              res.render("show", { biere });
          } else {
              res.status(404).send("biere non trouvé");
          }
      })
      .catch((error) => {
          res.status(500).send("Erreur lors de la récupération du biere");
      });
};

// Afficher tous les biere (index)
const index = (req, res) => {
    Biere.findAll()
      .then((biere) => {
          res.render("index", { biere });
      })
      .catch((error) => {
          res.status(500).send("Erreur lors de la récupération des bars");
      });
};

module.exports = { show, index };