import { Router } from "express"
import resolveBody from "../midwares/resolve-body.mw.js"
import resolveImageId from "../midwares/resolve-id.mw.js"
import resolveImageSize from "../midwares/resolve-img-size.mw.js"
import resolveImgFormat from "../midwares/resolve-img-format.mw.js"
import {
  downloadImageById,
  deleteImageById,
  getAllImages,
  addNewImage,
} from "../controllers/imgs.controller.js"

const route = Router()

route.get("/", getAllImages)
route.get("/:id/download", resolveImageId, downloadImageById)
route.post("/", resolveBody, resolveImgFormat, resolveImageSize, addNewImage)
route.delete("/:id", resolveImageId, deleteImageById)

export default route
