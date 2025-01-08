const express = require("express")
const router = express.Router()
const { show, index } = require("../controller/barsController")


router.get("/bars", index)

router.get("/bars/:id", show)





module.exports = router