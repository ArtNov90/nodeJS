const Commande = require("../models/commande");

// Afficher un bar spécifique (show)
const show = (req, res) => {
    Commande.findByPk(parseInt(req.params.id))
      .then((commande) => {
          if (commande) {
              res.render("show", { commande });
          } else {
              res.status(404).send("Commande non trouvé");
          }
      })
      .catch((error) => {
          res.status(500).send("Erreur lors de la récupération de la Commande");
      });
};

// Afficher tous les commande (index)
const index = (req, res) => {
    Commande.findAll()
      .then((commande) => {
          res.render("index", { commande });
      })
      .catch((error) => {
          res.status(500).send("Erreur lors de la récupération de la commande");
      });
};

module.exports = { show, index };