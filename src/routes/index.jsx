import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import News from "../views/News";
import Contact from "../views/Contact";
import Blog from "../views/Blog";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/News", element: <News /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Blog", element: <Blog /> },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;

//Tematica Robotica
//Diseño Futurista
//Colores Acorde al tema
//Minimo 5 paginas - Botones
//Imagenes Propias o con IA
