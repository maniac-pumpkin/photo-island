import { Router } from "express"
import {
  getImagesByName,
  getCollectionLength,
} from "../controllers/collection.controller.js"

const route = Router()

route.get("/find/:name", getImagesByName)
route.get("/length", getCollectionLength)

export default route
