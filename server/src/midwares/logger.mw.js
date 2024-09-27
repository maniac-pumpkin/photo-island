const getFullTime = () => {
  const date = new Date()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const second = date.getSeconds()
  const localeDate = date.toLocaleDateString()
  return `${localeDate}/${hour}:${minutes}:${second}`
}

const logger = (req, _, next) => {
  const httpMethod = req.method
  const httpUrl = req.url
  const time = getFullTime()
  console.info(`[${httpMethod}] - [${httpUrl}] - [${time}]`)
  next()
}

export default logger
