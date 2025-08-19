
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login"
import Browse from "./Browse"
import Terms from "../pages/Term";
import Privacy from "../pages/Privacy";
import MovieDetails from "./MovieDetails"
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      
        <Login />
      
    ),
  },
  {
    path:"/terms", element:(<Terms />)
      
  },
  {path:"/movie/:id", element:(<MovieDetails />)},
  {
    path:"/privacy", element:(<Privacy />)
  },
  {
    path: "/browse",
    element: (
    
        <Browse />
     
    ),
  },
]);

const Body = () => {
  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
