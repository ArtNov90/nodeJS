const {Products, maxId} = require("../model/Product")


const getById = (req, res) => {
  const { id } = req.params

  const product = Products.find((p) => p.id == id)

  if (product) {
    res.json(product)
  } else {
    res.json({ message: "Product not found !" })
  }
}

const getAll = (req, res) => {
  res.json(Products)
}

const create = (req, res) => {
  const product = { ...req.body, id: maxId }
  Products.push(product)
  maxId++

  res.status(201).json({
    message: "Product created",
    product
  })
}

const update = (req, res) => {
  const { id } = req.params
  const product = {... req.body, id:parseInt(id)  }

  const index = Products.findIndex( (p) => p.id == id)

  if (index === -1)
    return res.status(404).json({message : "product not found !"})

  Products[index] = product
  res.json({message : "Product updated", product})
}


const destroy = (req, res) => {
  const { id } = req.params

  const index = Products.findIndex((p) => p.id == id)

  if (index === -1) {
    return res.status(404).json({ message: "Product not found !" })
  }

  Products.splice(index, 1)
  res.json({ message: "Product deleted !" })
}

module.exports = { getById, getAll, create, update, destroy }