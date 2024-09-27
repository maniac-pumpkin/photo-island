import fileUpload from "express-fileupload"
import cors from "cors"
import { json } from "express"

import errorHandler from "./resolve-errors.mw.js"
import logger from "./logger.mw.js"

const middlewares = [cors(), json(), fileUpload(), logger, errorHandler]

export default middlewares
