const express = require("express")
const router = express.Router()
const { getById, getAll, create} = require("../controller/usersController")

router.get("/users/:id", getById)
router.get("/users", getAll)
router.post("/users", create)

module.exports = router