const express = require("express")
const router = express.Router()
const { getById, getAll, create, update} = require("../controller/usersController")

router.get("/users/:id", getById)
router.get("/users", getAll)
router.post("/users", create)
router.put("/users/:id", update)


module.exports = router