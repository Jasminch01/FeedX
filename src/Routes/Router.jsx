import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AvilableFoods from "../Pages/AvilableFoods";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                index : true,
                element : <Home></Home>
            },
            {
                path : '/avilable-foods',
                element : <AvilableFoods></AvilableFoods>
            }
        ]
    },

])
export default Router;