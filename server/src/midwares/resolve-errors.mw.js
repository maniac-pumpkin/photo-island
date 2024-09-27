const errorHandler = (error, _, response, next) => {
  console.error(error)
  const status = error.status || 500
  response.sendStatus(status)
}

export default errorHandler
