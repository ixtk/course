import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    branch: String
  },
  { timestamps: true }
)

export const Employee = mongoose.model("Employee", employeeSchema)
