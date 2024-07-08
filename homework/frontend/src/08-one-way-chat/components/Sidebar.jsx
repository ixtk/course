const Sidebar = ({ users, setActiveUser, activeUser }) => {
  const buttonList = users.map((name, index) => {
    return (
      <button
        key={index}
        onClick={() => setActiveUser(name)}
        className={activeUser === name ? "selected" : ""}
      >
        {name}
      </button>
    );
  });

  return <div className="sidebar">{buttonList}</div>;
};

export default Sidebar;
