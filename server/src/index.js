import "dotenv/config"
import express from "express"
import middlewares from "./midwares/index.js"
import dbConnect from "./database/db-connect.js"

import imagesRoute from "./routes/imgs.route.js"
import collectionRoute from "./routes/collection.route.js"

const app = express()

app.use(middlewares)
app.use("/images", imagesRoute)
app.use("/collection", collectionRoute)
app.use("*", (_, res) => res.status(404).send("Wrong route."))

const SERVER_URL = process.env["SERVER_URL"]
const SERVER_PORT = process.env["SERVER_PORT"]
const MONGODB_URI = process.env["MONGODB_URI"]

dbConnect(MONGODB_URI)
  .then(() =>
    app.listen(SERVER_PORT, () =>
      console.log(`Server is running on ${SERVER_URL}`)
    )
  )
  .catch((err) => console.error(err))
