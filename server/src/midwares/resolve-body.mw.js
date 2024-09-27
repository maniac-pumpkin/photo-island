const message = "Missing required body parameters."

const resolveImageId = async (req, res, next) => {
  const name = req.body.name
  const image = req.files.image
  if (name && image) next()
  else res.status(400).send(message)
}

export default resolveImageId
