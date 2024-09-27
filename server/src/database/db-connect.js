import mongoose from "mongoose"

let cached = global.mongoose
if (!cached) cached = global.mongoose = { conn: null, promise: null }

const dbConnect = async (url) => {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(url, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }
  return cached.conn
}

export default dbConnect
