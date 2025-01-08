const Bars = require("../models/bars");

// Afficher un bar spécifique (show)
const show = (req, res) => {
    Bars.findByPk(parseInt(req.params.id))
      .then((bar) => {
          if (bar) {
              res.render("show", { bar });
          } else {
              res.status(404).send("Bar non trouvé");
          }
      })
      .catch((error) => {
          res.status(500).send("Erreur lors de la récupération du bar");
      });
};

// Afficher tous les bars (index)
const index = (req, res) => {
    Bars.findAll()
      .then((bars) => {
          res.render("index", { bars });
      })
      .catch((error) => {
          res.status(500).send("Erreur lors de la récupération des bars");
      });
};

module.exports = { show, index };
