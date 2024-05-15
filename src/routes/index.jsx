import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contacto", element: <h1>Contacto</h1> },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
