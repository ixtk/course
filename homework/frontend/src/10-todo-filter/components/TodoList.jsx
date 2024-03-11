import TodoItem from "./TodoItem";

// named export
export const TodoList = ({ todoList, setTodoList, filteredTodos }) => {
  const todos = filteredTodos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return <ul>{todos}</ul>;
};

// export default TodoList
