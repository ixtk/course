import { useState } from "react"

const dateFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
}

export const Employees = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const response = await fetch("http://localhost:3000/employees")
    const employeesData = await response.json()
    console.log("All employees:", employeesData)

    setEmployees(employeesData)
  }

  if (employees.length === 0) {
    return <button onClick={getEmployees}>Get all employees</button>
  }

  const updateEmployee = async (empToUpdateId) => {
    const response = await fetch(
      `http://localhost:3000/employees/${empToUpdateId}`,
      {
        method: "PATCH",
        body: JSON.stringify({ name: "Beep Boop" }),
        headers: {
          "content-type": "application/json"
        }
      }
    )

    const newEmployee = await response.json()
    console.log("Updated employee:", newEmployee)

    if (response.ok) {
      setEmployees(
        employees.map((emp) => {
          if (emp._id === empToUpdateId) {
            return newEmployee
          } else {
            return emp
          }
        })
      )
    }
  }

  return (
    <ul className="emp-list">
      {employees.map((employee) => {
        return (
          <li key={employee._id}>
            <span>{employee.name}</span>{" "}
            <span>
              {new Date(employee.updatedAt).toLocaleDateString(
                "ka-GE",
                dateFormatOptions
              )}
            </span>
            <button onClick={() => updateEmployee(employee._id)}>Change</button>
          </li>
        )
      })}
    </ul>
  )
}
