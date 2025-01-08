const express = require("express")
const router = express.Router()
const { show, index } = require("../controller/biereController")


router.get("/biere", index)
router.get("/biere/:id", show)


module.exports = router