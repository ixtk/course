import express from "express"
import mongoose from "mongoose"
import fs from "fs"
import cors from "cors"

const employeeSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    branch: String
  },
  { timestamps: true }
)

export const Employee = mongoose.model("Employee", employeeSchema)

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173"
  })
)

app.use(express.json())

// example logging middleware
app.use((req, res, next) => {
  console.log(req.protocol, req.method, req.ip, req.path, new Date())

  // const logEntry = `${req.protocol} ${req.method} ${req.ip} ${
  //   req.path
  // } ${req.get("user-agent")} ${new Date()}\n`

  // fs.appendFile("./logs.txt", logEntry, (error) => {
  //   if (error) {
  //     console.log("Error saving to the log file")
  //   }
  // })

  next()
})

app.get("/employees", async (req, res) => {
  const { branch } = req.query

  if (branch) {
    const filteredEmployees = await Employee.find({
      branch: branch
    }).exec()

    if (filteredEmployees.length > 0) {
      return res.json(filteredEmployees)
    } else {
      return res.status(404).json({
        error: `No employees found in the branch: ${branch.toLowerCase()}`
      })
    }
  }

  const employees = await Employee.find().exec()

  return res.json(employees)
})

app.post("/employees", async (req, res) => {
  const newEmployeeValues = req.body

  const newEmployee = new Employee(newEmployeeValues)
  await newEmployee.save()

  res.status(201).json(newEmployee)
})

app.get("/employees/:id", async (req, res) => {
  const { id } = req.params

  // exec-ის მიბმით უფრო დეტალური ინფორმაცია გამოდის error-ის შემთხვევაში
  const employee = await Employee.findById(id).exec()

  if (employee) {
    res.json(employee)
  } else {
    res.status(404).json({ error: `Employee not found with id ${id}` })
  }
})

app.patch("/employees/:id", async (req, res) => {
  const { id } = req.params
  const updatedValues = req.body

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      updatedValues,
      { new: true }
    ).exec()
    res.json(updatedEmployee)
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: `Employee not found with id ${id}` })
  }
})

app.delete("/employees/:id", async (req, res) => {
  const { id } = req.params
  try {
    await Employee.findByIdAndDelete(id).exec()
    res.json({ message: "Employee deleted" })
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: `Employee not found with id ${id}` })
  }
})

app.listen(3000, async () => {
  console.log("Server running on port 3000")

  try {
    // demo იქნება ბაზის სახელი
    await mongoose.connect("mongodb://127.0.0.1:27017/demo")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})
