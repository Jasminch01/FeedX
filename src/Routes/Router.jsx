import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AvilableFoods from "../Pages/AvilableFoods";
import AddFoods from "../Pages/AddFoods";
import ManageFood from "../Pages/ManageFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";
import PrivetRoute from "./PrivetRoute";
import Register from "../Pages/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader : () => fetch('http://localhost:5000/foods')
      },
      {
        path: "/avilable-foods",
        element: <AvilableFoods></AvilableFoods>,
      },
      {
        path: "/add-foods",
        element: (
          <PrivetRoute>
            <AddFoods></AddFoods>
          </PrivetRoute>
        ),
      },
      {
        path: "/manage-food",
        element: (
          <PrivetRoute>
            <ManageFood></ManageFood>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivetRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path : '/register',
    element : <Register></Register>
  }
]);
export default Router;
