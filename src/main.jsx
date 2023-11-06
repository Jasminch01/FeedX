import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import AuthContext from "./Context/AuthContext.jsx";

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthContext>
        <RouterProvider router={Router}></RouterProvider>
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>
);
