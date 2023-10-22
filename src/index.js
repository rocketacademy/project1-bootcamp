import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PastMenus from "./Pages/PastMenus";
import Book from "./Pages/Book";

const router = createBrowserRouter([
  {
    path: "/project1-bootcamp",
    element: <App />,
  },
  {
    path: "/project1-bootcamp/past-menus",
    element: <PastMenus />,
  },
  {
    path: "/project1-bootcamp/book",
    element: <Book />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
