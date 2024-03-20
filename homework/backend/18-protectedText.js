import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bcrypt from "bcrypt"
import crypto from "crypto"

const algorithm = "aes-256-cbc"

// crypto.randomBytes(32)
// (toString("hex") for visible string version)

// FOR DEMO, do NOT expose in git, put in .env file,
const key = "<your_key>"

export const encrypt = (text) => {
  const iv = crypto.randomBytes(16)
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key, "hex"), iv)
  let encrypted = cipher.update(text)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return encrypted.toString("hex") + "." + iv.toString("hex")
}

export const decrypt = (encrypted) => {
  let [encryptedText, iv] = encrypted.split(".")

  encryptedText = Buffer.from(encryptedText, "hex")
  iv = Buffer.from(iv, "hex")

  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, "hex"), iv)
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

// Express app & Routes

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173"
  })
)
app.use(express.json())

const port = 3000

const noteSchema = new mongoose.Schema({
  text: String,
  password: String,
  title: String
})

const Note = mongoose.model("Note", noteSchema)

app.post("/note", async (req, res) => {
  const { text, password, title } = req.body

  const hashedPassword = await bcrypt.hash(password, 12)

  try {
    const newNote = await Note.create({
      text: encrypt(text),
      password: hashedPassword,
      title
    })
    res.status(201).json(newNote)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.post("/note/:title", async (req, res) => {
  const { title } = req.params
  const { password } = req.body

  try {
    const note = await Note.findOne({ title }).lean()
    if (note && (await bcrypt.compare(password, note.password))) {
      return res.json({
        ...note,
        text: decrypt(note.text)
      })
    } else {
      return res.status(401).json({ message: "Password is not correct" })
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

app.get("/note-status/:title", async (req, res) => {
  const { title } = req.params
  const noteExists = Boolean(await Note.exists({ title }))

  res.status(noteExists ? 200 : 404).json({ noteExists })
})

app.listen(port, async () => {
  console.log(`Server running on port ${port}`)
  try {
    await mongoose.connect("mongodb://localhost:27017/notesDB")
    console.log("Connected to the database")
  } catch (error) {
    console.log("Couldn't connect to the DB")
  }
})
