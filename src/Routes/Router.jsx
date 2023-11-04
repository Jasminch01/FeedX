import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AvilableFoods from "../Pages/AvilableFoods";
import AddFoods from "../Pages/AddFoods";
import ManageFood from "../Pages/ManageFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/avilable-foods",
        element: <AvilableFoods></AvilableFoods>,
      },
      {
        path: "/add-foods",
        element: <AddFoods></AddFoods>,
      },
      {
        path: "/manage-food",
        element: <ManageFood></ManageFood>,
      },
      {
        path: "/my-food-request",
        element: <MyFoodRequest></MyFoodRequest>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default Router;
