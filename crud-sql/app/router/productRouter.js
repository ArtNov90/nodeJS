const express = require("express")
const router = express.Router()
const { getById, getAll, create, update, destroy } = require("../controller/productController")

router.get("/products/:id", getById)
router.get("/products", getAll)
router.post("/products", create)
router.delete("/products/:id", destroy)
router.put("/products/:id", update)

module.exports = router