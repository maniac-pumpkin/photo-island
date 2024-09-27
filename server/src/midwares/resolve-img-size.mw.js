const allowedSize = 999
const message = `Image size exceeds the maximum limit of ${allowedSize} KB. Please upload a smaller image.`

const resolveImageSize = async (req, res, next) => {
  const image = req.files.image
  const imageSizeInKB = image.size / 1024
  if (imageSizeInKB < allowedSize) next()
  else res.status(400).send(message)
}

export default resolveImageSize
