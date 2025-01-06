
const express = require("express")
const router = express.Router() // const router = require("express").Router()

const { getById, search, index, store, update, destroy} = require("../controller/userController")
const { ageIsPresentAndPositive, nameIsPresent} = require("../middleware/userForm")

router.get("/users/search", search)
router.get("/users/:id", getById)
router.get("/users", index)
router.post("/users", [nameIsPresent, ageIsPresentAndPositive], store)
router.put("/users/:id", [nameIsPresent, ageIsPresentAndPositive], update)
router.delete("/users", destroy)

module.exports = router