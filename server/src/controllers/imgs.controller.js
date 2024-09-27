import imgModel from "../database/imgs.model.js"

export const getAllImages = async (req, res, next) => {
  try {
    const limitValue = +req.query.limit || 0
    const images = await imgModel.find().limit(limitValue)
    res.status(200).json(images)
  } catch (error) {
    next(error)
  }
}

export const downloadImageById = async (req, res, next) => {
  try {
    const id = req.params.id
    const image = await imgModel.findById(id)
    const base64Data = image.image.split(",").pop()
    const buffer = Buffer.from(base64Data, "base64")
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Disposition": `attachment; filename=${image.name}.png`,
    })
    res.end(buffer)
  } catch (error) {
    next(error)
  }
}

export const addNewImage = async (req, res, next) => {
  try {
    const name = req.body.name.trim()
    const imageFile = req.files.image
    const base64Data = imageFile.data.toString("base64")
    const image = `data:image/png;base64,${base64Data}`
    await imgModel.create({ name, image })
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
}

export const deleteImageById = async (req, res, next) => {
  try {
    const id = req.params.id
    await imgModel.findByIdAndDelete(id)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
