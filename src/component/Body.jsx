import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = lazy(() => import("./Login"));
const Browse = lazy(() => import("./Browse"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading Login...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/browse",
    element: (
      <Suspense fallback={<div>Loading Browse...</div>}>
        <Browse />
      </Suspense>
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
