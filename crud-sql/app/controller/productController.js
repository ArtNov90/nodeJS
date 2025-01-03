const Product = require("../model/Product")

const getById = (req, res) => {
  const { id } = req.params

}

const getAll = (req, res) => {
}

const create = (req, res) => {
  Product.create({ 
    name: "toto",
    price : 152,
    description : "Hello"
  }).then( (result) => {
    res.status(201).json(result)
  })
}

const update = (req, res) => {
  const { id } = req.params
  const product = {... req.body, id:parseInt(id)  }
}


const destroy = (req, res) => {
  const { id } = req.params
}

module.exports = { getById, getAll, create, update, destroy }