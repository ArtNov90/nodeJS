const nameIsPresent = (req, res, next) => {
  const { name } = req.body

  if (!name || typeof name != 'string' || name === '') {
    return res.status(400).json({ message: "Name must be present" })
  }

  next()
}

const ageIsPresentAndPositive = (req, res, next) => {
  const { age } = req.body

  if (!age || typeof age != 'number' || age < 0) {
    return res.status(400).json({ message: "Age must be present and positive" })
  }

  next()
}

module.exports = { ageIsPresentAndPositive, nameIsPresent}