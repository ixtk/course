const TagList = ({ tags }) => {
  return (
    <div className="tag-buttons">
      {tags.map((tag) => {
        return <button key={tag}>{tag}</button>;
      })}
    </div>
  );
};

export default TagList;
