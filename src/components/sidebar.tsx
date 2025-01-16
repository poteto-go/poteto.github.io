import "../stylesheet/sidebar.css";

const Sidebar = () => {
  return (
    <aside className={`sidebar`}>
      <nav className="menu">
        <a href="#/">Home</a>
        <a href="#/getting_start">Getting Start</a>
        <a href="#/router">Router</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
