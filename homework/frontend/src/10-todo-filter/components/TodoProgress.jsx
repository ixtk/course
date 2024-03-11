const TodoProgress = (props) => {
  const completedTodos = props.todoList.filter((todo) => {
    if (todo.isChecked) {
      return true;
    } else {
      return false;
    }
  });

  const completedPercentage =
    props.todoList.length === 0
      ? 0
      : Math.round((completedTodos.length / props.todoList.length) * 100);

  return (
    <h2>
      {completedPercentage}%
      <progress max="100" value={completedPercentage}>
        {completedPercentage}
      </progress>
    </h2>
  );
};

export default TodoProgress;
