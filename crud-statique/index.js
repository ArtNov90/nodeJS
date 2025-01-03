const express = require("express")

const app = express()



app.use(express.json())
app.listen(3000, () => {
  console.log("App listening on port 3000!")
})

let Products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
  { id: 3, name: "Headphones", price: 149.99, category: "Electronics" },
  { id: 4, name: "Running Shoes", price: 89.99, category: "Sports" },
  { id: 5, name: "Coffee Maker", price: 79.99, category: "Kitchen" },
  { id: 6, name: "Backpack", price: 49.99, category: "Fashion" },
  { id: 7, name: "Watch", price: 199.99, category: "Fashion" },
  { id: 8, name: "Desk Chair", price: 159.99, category: "Furniture" },
  { id: 9, name: "Water Bottle", price: 19.99, category: "Sports" },
  { id: 10, name: "Keyboard", price: 129.99, category: "Electronics" }
]
let maxId = 11


app.get("/products/:id", (req, res) => {
  const { id } = req.params

  const product = Products.find((p) => p.id == id)

  if (product) {
    res.json(product)
  } else {
    res.json({ message: "Product not found !" })
  }
})

app.get("/products", (req, res) => {
  res.json(Products)
})

app.post("/products", (req, res) => {
  const product = { ...req.body, id: maxId }
  Products.push(product)
  maxId++

  res.status(201).json({
    message: "Product created",
    product
  })
})


app.delete("/products/:id", (req, res) => {
  const { id } = req.params

  const index = Products.findIndex((p) => p.id == id)

  if (index === -1) {
    return res.status(404).json({ message: "Product not found !" })
  }

  Products.splice(index, 1)
  res.json({ message: "Product deleted !" })
})


app.put("/products/:id", (req, res) => {
  const { id } = req.params
  const product = {... req.body, id:parseInt(id)  }

  const index = Products.findIndex( (p) => p.id == id)

  if (index === -1)
    return res.status(404).json({message : "product not found !"})

  Products[index] = product
  res.json({message : "Product updated", product})
})

