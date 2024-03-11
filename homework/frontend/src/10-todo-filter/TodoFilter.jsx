import "./App.css"
import { useState } from "react"
import TodoProgress from "./components/TodoProgress"
import TodoForm from "./components/TodoForm"
import initialTodos from "./initialTodos.json"
import TodoFilters from "./components/TodoFilters"
import { TodoList } from "./components/TodoList"

export const TodoFilter = () => {
  const [todoList, setTodoList] = useState(initialTodos)
  const [category, setCategory] = useState("all")

  /*
  let filteredTodos = todoList

  if (category === "completed") {
    filteredTodos = todoList.filter((todo) => {
      return todo.isChecked
    })
  } else if (category === "incomplete") {
    filteredTodos = todoList.filter((todo) => {
      return !todo.isChecked
    })
  }
*/
  /*
  switch (category) {
    case "completed":
      filteredTodos = todoList.filter((todo) => {
        return todo.isChecked
      })
      break
    case "incomplete":
      filteredTodos = todoList.filter((todo) => {
        return !todo.isChecked
      })
  break
    default:
      filteredTodos = todoList
  }
  */

  const filteredTodos = todoList.filter((todo) => {
    if (category === "completed") {
      return todo.isChecked
    } else if (category === "incomplete") {
      return !todo.isChecked
    } else {
      return true
    }
  })

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>{filteredTodos.length} Todos</h1>

      {category === "all" && <TodoProgress todoList={todoList} />}
      <TodoFilters setCategory={setCategory} category={category} />
      <br />
      <br />
      <TodoForm
        setCategory={setCategory}
        setTodoList={setTodoList}
        todoList={todoList}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}
