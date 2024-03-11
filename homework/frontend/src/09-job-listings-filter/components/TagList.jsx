const TagList = ({ tags, addFilter }) => {
  return (
    <div className="tag-buttons">
      {tags.map((tag) => {
        return (
          <button onClick={() => addFilter(tag)} key={tag}>
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagList;
