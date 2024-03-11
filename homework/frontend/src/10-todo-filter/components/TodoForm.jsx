import { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoForm = ({ setTodoList, todoList, setCategory }) => {
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    setCategory("all");
    setTodoText("");
    const newTodo = {
      value: todoText,
      isChecked: false,
      id: uuid(),
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <input
        type="text"
        onChange={(event) => setTodoText(event.target.value)}
        value={todoText}
        placeholder="Type something..."
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
};

export default TodoForm;
