import logo from "/assets/poteto.svg";
import "../stylesheet/header.css";

const Sidebar = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};
export default Sidebar;
