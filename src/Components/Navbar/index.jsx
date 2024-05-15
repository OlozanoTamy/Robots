import "./styles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_log inconsolata">Robots.io</div>
      <div className="nav_items">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/News"}>News</Link>
        <Link to={"/Blog"}>Blog</Link>
        <Link to={"/Contact"}>Contact</Link>
      </div>

      <div className="nav_toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
