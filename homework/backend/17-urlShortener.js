import express from "express"
import mongoose from "mongoose"
import { customAlphabet } from "nanoid"

const app = express()

app.use(express.json())

const nanoid = customAlphabet("1234567890abcdef", 8)

const urlSchema = new mongoose.Schema(
  {
    originalUrl: String,
    shortUrl: String
  },
  { timestamps: true }
)

const Url = mongoose.model("Url", urlSchema)

app.get("/urls", async (req, res) => {
  const allUrlDocs = await Url.find({}, { __v: 0, _id: 0, updatedAt: 0 })

  return res.json({ urls: allUrlDocs })
})

app.get("/urls/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params
  const urlDoc = await Url.findOne({ shortUrl })

  if (urlDoc) {
    res.redirect(urlDoc.originalUrl)
  } else {
    res.status(404).json({ message: "URL not found or expired" })
  }
})

app.post("/urls", async (req, res) => {
  const { originalUrl, customPath } = req.body

  let urlDoc
  if (customPath) {
    urlDoc = new Url({ originalUrl, shortUrl: customPath })
  } else {
    const shortUrl = nanoid()
    urlDoc = new Url({ originalUrl, shortUrl })
  }

  await urlDoc.save()

  res.status(201).json({
    originalUrl: urlDoc.originalUrl,
    shortUrl: `http://localhost:3000/urls/${urlDoc.shortUrl}`
  })
})

app.patch("/urls/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params
  const { newOriginalUrl } = req.body
  const updatedUrl = await Url.findOneAndUpdate(
    { shortUrl },
    { originalUrl: newOriginalUrl },
    { new: true }
  )

  if (updatedUrl) {
    res.json({
      message: "URL updated successfully",
      updatedUrl: {
        originalUrl: updatedUrl.originalUrl,
        shortUrl: `http://localhost:3000/urls/${updatedUrl.shortUrl}`
      }
    })
  } else {
    res.status(404).json({ message: "URL not found" })
  }
})

/*
app.delete("/urls/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params

  const deletedUrl = await Url.findOneAndDelete({ shortUrl })

  if (deletedUrl) {
    res.json({ message: "URL deleted successfully" })
  } else {
    res.status(404).json({ message: "URL not found" })
  }
})
*/

app.listen(3000, async () => {
  console.log(`Server is running on port 3000`)
  await mongoose.connect("mongodb://127.0.0.1/urlShortener")
  console.log("Connected to the database")
})
