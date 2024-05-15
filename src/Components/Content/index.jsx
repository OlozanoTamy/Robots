import "./styles.css";
import { Link } from "react-router-dom";
import imagen1 from "../../assets/imagen1.jpeg";
import imagen2 from "../../assets/imagen2.jpeg";
const Content = () => {
  return (
    <>
      <div className="container">
        <div className="news">
          <div className="noticia">
            <img src={imagen1} alt="hola" width="50%" />
            <button>
              <Link to={"/News"}>Ir a la noticia..</Link>
            </button>
          </div>
          <div className="noticia">
            <img src={imagen2} alt="imagen-ia" width="50%" />
            <button>
              <Link className="Link" to={"/News"}>
                Ir a la noticia..
              </Link>
            </button>
          </div>
        </div>
        <div className="blog">
          <div className="article">
            <h3>Blog 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              architecto ullam dolor in incidunt ipsum adipisci at. Cumque sed
              quod, voluptatem accusamus est quae nostrum, quas, quaerat hic
              illum rerum.
            </p>
            <Link to={"/Blog"}>Ir al Blog</Link>
          </div>
          <div className="article">
            <h3>Blog 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quidem quia eaque quaerat facere quod quos doloremque tenetur vero
              odio ipsam, corrupti soluta, dignissimos consequuntur nam quo
              quibusdam ratione! Blanditiis.
            </p>
            <Link to={"/Blog"}>Ir al Blog</Link>
          </div>
          <div className="article">
            <h3>Blog 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              saepe sit dignissimos iste facere atque aspernatur, aliquid vel
              quos quisquam a aut quae vero nostrum tenetur recusandae qui
              pariatur temporibus?
            </p>
            <Link id="links" to={"/Blog"}>
              Ir al Blog
            </Link>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default Content;
