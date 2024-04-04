import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayOut";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //TODO: add error page
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
