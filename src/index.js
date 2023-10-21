import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PastMenus from "./Pages/PastMenus";

const router = createBrowserRouter([
  {
    path: "/project1-bootcamp",
    element: <App />,
  },
  {
    path: "/project1-bootcamp/past-menus",
    element: <PastMenus />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
