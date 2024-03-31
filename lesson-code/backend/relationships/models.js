import { Schema, model } from "mongoose"

// EMBEDDING: ONE-TO-ONE

/*
const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})
*/

const userSchema = new Schema({
  email: String,
  username: String,
  // or, address: addressSchema
  address: {
    street: String,
    city: String
  }
})

export const User = model("User", userSchema)

// EMBEDDING: ONE-TO-MANY

const postSchema = new Schema({
  title: String,
  author: String,
  comments: [
    {
      commenter: String,
      text: String
    }
  ]
})

export const Post = model("Post", postSchema)

// REFERENCING: ONE-TO-MANY

const publisherSchema = new Schema({
  name: String,
  address: String
})

const bookSchema = new Schema({
  title: String,
  author: String,
  publisher: {
    type: Schema.Types.ObjectId,
    ref: "Publisher"
  }
})

export const Publisher = model("Publisher", publisherSchema)
export const Book = model("Book", bookSchema)

// REFERENCING: MANY-TO-MANY

const categorySchema = new Schema({
  name: { type: String, required: true }
})

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }]
})

export const Category = model("Category", categorySchema)
export const Product = model("Product", productSchema)
