import imgModel from "../database/imgs.model.js"

export const getImagesByName = async (req, res, next) => {
  try {
    const name = req.params.name.toLowerCase()
    const imagesByName = await imgModel.find({
      name: { $regex: name, $options: "i" },
    })
    res.status(200).json(imagesByName)
  } catch (error) {
    next(error)
  }
}

export const getCollectionLength = async (_, res, next) => {
  try {
    const length = await imgModel.countDocuments()
    res.status(200).json(length)
  } catch (error) {
    next(error)
  }
}
