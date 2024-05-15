import "./styles.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_log">Talento Tech</div>
      <div className="nav_items">
        <a href="">Inicio</a>
        <a href="">Mision</a>
        <a href="">Portafolio</a>
        <a href="">Contacto</a>
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
