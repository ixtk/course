import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import session from "express-session"
import MongoStore from "connect-mongo"
import cookieParser from "cookie-parser"

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
)

app.use(express.json())
app.use(cookieParser())

const sessionMiddleware = session({
  secret: "very safe",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb://127.0.0.1:27017/user-sessions"
  }),
  cookie: {
    maxAge: 1000 * 60
  }
})

app.get("/status", sessionMiddleware, (req, res) => {
  console.log("Incoming cookies:", req.cookies)
  console.log("Current session:", req.session)

  return res.json({ name: req.session.name })
})

app.post("/cookies", (req, res) => {
  const { name } = req.body

  if (name) {
    res.cookie("name", name, {
      maxAge: 1000 * 60
    })
  }

  res.json({ name })
})

app.post("/sessions", sessionMiddleware, (req, res) => {
  const { name } = req.body

  if (name) {
    // res.cookie-ის ნაცვლად სესიის ობიექტში ვამატებთ სახელს
    req.session.name = name
  }

  res.json({ name })
})

app.listen(3000, async () => {
  console.log("Server running on port 3000")

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/user-sessions")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})
