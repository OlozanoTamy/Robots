import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
