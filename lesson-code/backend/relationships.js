import express from "express"
import mongoose from "mongoose"

// EMBEDDING: ONE-TO-ONE

/*
const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})
*/

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  // or, address: addressSchema
  address: {
    street: String,
    city: String
  }
})

const User = mongoose.model("User", userSchema)

// EMBEDDING: ONE-TO-MANY

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  comments: [
    {
      commenter: String,
      text: String
    }
  ]
})

const Post = mongoose.model("Post", postSchema)

// REFERENCING: ONE-TO-MANY

const publisherSchema = new mongoose.Schema({
  name: String,
  address: String
})

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher"
  }
})

const Publisher = mongoose.model("Publisher", publisherSchema)
const Book = mongoose.model("Book", bookSchema)

// REFERENCING: MANY-TO-MANY

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
})

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }]
})

const Category = mongoose.model("Category", categorySchema)
const Product = mongoose.model("Product", productSchema)

const app = express()

app.use(express.json())

app.get("/users", async (req, res) => {
  const users = await User.find().lean().exec()
  res.json(users)
})

app.get("/users/:userId", async (req, res) => {
  const { userId } = req.params
  const user = await User.findById(userId).lean().exec()
  res.json(user)
})

app.post("/users", async (req, res) => {
  const { username, email, address } = req.body
  const newUser = new User({ username, email, address })

  const savedUser = await newUser.save()

  res.status(201).json(savedUser)
})

app.patch("/users/:userId", async (req, res) => {
  const { userId } = req.params
  const { address } = req.body

  // const user = await User.findById(userId)

  // user.address.city = address.city
  // user.address.street = address.street

  // const updatedUser = await user.save()

  const updatedUser = await User.findByIdAndUpdate(userId, {
    "address.city": address.city,
    "address.street": address.street
  })

  res.json(updatedUser)
})

app.get("/posts", async (req, res) => {
  const posts = await Post.find().lean().exec()
  res.json(posts)
})

app.post("/posts", async (req, res) => {
  const post = await Post.create(req.body)
  res.json(post)
})

app.get("/posts/:postId", async (req, res) => {
  const { postId } = req.params
  const post = await Post.findById(postId).lean().exec()
  res.json(post)
})

app.post("/posts/:postId/comments", async (req, res) => {
  const { postId } = req.params
  const { commenter, text } = req.body

  const post = await Post.findById(postId)

  post.comments.push({
    commenter,
    text
  })

  const updatedPost = await post.save()
  res.json(updatedPost)
})

app.put("/posts/:postId/comments/:commentId", async (req, res) => {
  const { postId, commentId } = req.params
  const { commenter, text } = req.body

  // const post = await Post.findById(postId)
  // const comment = post.comments.id(commentId)

  // comment.commenter = commenter
  // comment.text = text

  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId, "comments._id": commentId },
    { "comments.$.text": text, "comments.$.commenter": commenter },
    { new: true }
  )

  // const updatedPost = await post.save()
  res.json(updatedPost.comments.id(commentId))
})

app.delete("/posts/:postId/comments/:commentId", async (req, res) => {
  const { postId, commentId } = req.params

  // const post = await Post.findById(postId)
  // post.comments.id(commentId).deleteOne()

  // const updatedPost = await post.save()

  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId },
    { $pull: { comments: { _id: commentId } } },
    { new: true }
  )

  // 204
  res.json(updatedPost.comments)
})

app.get("/books", async (req, res) => {
  const books = await Book.find().populate("publisher")
  res.json(books)
})

app.get("/publishers", async (req, res) => {
  const publishers = await Publisher.find().lean().exec()
  res.json(publishers)
})

app.post("/books", async (req, res) => {
  const { title, author, publisherId } = req.body

  const newBook = await Book.create({
    title,
    author,
    publisher: publisherId
  })

  res.json(newBook)
})

app.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id).populate("publisher")
  res.json(book)
})

app.listen(3000, async () => {
  console.log("Server running on port 3000")

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationships")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
  }
})
