const { create } = require("../controller/userController")
const express = require("express")
const router = express.Router()

router.post("/users", create)


module.exports = router