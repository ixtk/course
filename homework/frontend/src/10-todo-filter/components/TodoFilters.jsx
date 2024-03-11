const TodoFilters = ({ category, setCategory }) => {
  return (
    <>
      <button
        className={category === "all" ? "active" : ""}
        onClick={() => setCategory("all")}
      >
        All
      </button>
      <button
        className={category === "completed" ? "active" : ""}
        onClick={() => setCategory("completed")}
      >
        Completed
      </button>
      <button
        className={category === "incomplete" ? "active" : ""}
        onClick={() => setCategory("incomplete")}
      >
        Incomplete
      </button>
    </>
  );
};

export default TodoFilters;
