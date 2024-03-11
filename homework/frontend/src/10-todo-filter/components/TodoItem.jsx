const TodoItem = ({ todo, ...props }) => {
  const checkTodo = (id) => {
    const newTodos = props.todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }

      return todo;
    });

    props.setTodoList(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = props.todoList.filter((todo) => {
      if (todo.id === id) {
        return false;
      } else {
        return true;
      }
    });

    props.setTodoList(newTodos);
  };

  return (
    <li className={todo.isChecked ? "todo-completed" : ""} key={todo.id}>
      <span className="todo-text">{todo.value}</span>

      <button onClick={() => checkTodo(todo.id)}>
        {todo.isChecked ? "Uncheck" : "Check"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
