const express = require("express")
const router = express.Router()
const { show, index } = require("../controller/commandeController")


router.get("/commande", index)
router.get("/commande/:id", show)


module.exports = router