import { createBrowserRouter } from "react-router-dom";
import CoffeeCards from "../Components/CoffeeCards";
import MainLayout from "../Layouts/MainLayout";
import CoffeeDetails from "../Pages/CoffeeDetails";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards />,
            loader:()=> fetch('../coffees.json')
          },
          {
            path: "/category/:category",
            element: <CoffeeCards />,
            loader:()=> fetch('../coffees.json')
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
        loader:()=> fetch('../coffees.json')
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/coffee/:id",
       element: <CoffeeDetails />,
       loader:()=> fetch('../coffees.json')
      },
    ],
  },
]);
export default router;
