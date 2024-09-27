const isItImage = (image) => {
  const allowedFormats = ["png", "jpg", "jpeg"]
  const imgFormat = image.split(".").pop().toLowerCase()
  return allowedFormats.includes(imgFormat)
}

const message = "Invalid image format. Only PNG, JPG, and JPEG are allowed."

const resolveImgFormat = async (req, res, next) => {
  const image = req.files.image
  if (isItImage(image.name)) next()
  else res.status(400).send(message)
}

export default resolveImgFormat
