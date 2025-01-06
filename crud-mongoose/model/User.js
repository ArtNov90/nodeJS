const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  name: String,
  age: Number,
  
})

const model = mongoose.model("user", productSchema)

module.exports = model