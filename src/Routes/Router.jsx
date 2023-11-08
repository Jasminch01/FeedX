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
import ErrorPage from "../Pages/ErrorPage";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import UpdateFood from "../Components/UpdateFood/UpdateFood";
import ManageSingleFood from "../Components/ManageSingleFood/ManageSingleFood";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/featured-foods"),
      },
      {
        path: "/avilable-foods",
        element: <AvilableFoods></AvilableFoods>,
        loader: () => fetch("http://localhost:5000/foods"),
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
        loader: () => fetch("http://localhost:5000/foods"),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivetRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivetRoute>
        ),
      },
      {
        path: "/Food-details/:id",
        element: (
          <PrivetRoute>
            <FoodDetails></FoodDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/food-update/:id",
        element: <PrivetRoute>
          <UpdateFood></UpdateFood>
        </PrivetRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/manage-single-food/:id",
        element: <PrivetRoute>
          <ManageSingleFood></ManageSingleFood>
        </PrivetRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/requested-foods/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default Router;
