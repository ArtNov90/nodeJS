const express = require('express');
const router = express.Router();
const { getById, getAll, create, update, destroy } = require("../controller/userscontroller");

router.get("/users/:id", getById);
router.get("/users", getAll);
router.post("/users", create);
router.put("/users/:id", update);
router.delete("/users/:id", destroy);

module.exports = router;