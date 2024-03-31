import mongoose from "mongoose"
import { app } from "./relationships/server.js"

app.listen(3000, async () => {
  console.log("Server running on port 3000")

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationships")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
  }
})
