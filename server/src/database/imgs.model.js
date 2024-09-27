import { Schema, model } from "mongoose"

const ImgSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
})

const imgModel = model("imgs", ImgSchema)

export default imgModel
