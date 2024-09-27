import imgModel from "../database/imgs.model.js"

const message = "Image id not found."

const resolveImageId = async (req, res, next) => {
  const id = req.params.id
  const imageById = await imgModel.findById(id)
  if (imageById) next()
  else res.status(404).send(message)
}

export default resolveImageId
