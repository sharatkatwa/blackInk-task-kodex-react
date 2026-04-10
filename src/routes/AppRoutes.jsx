import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import ProtectedAuth from "./ProtectedAuth";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/Dashboard";
import NewArticlePage from "../pages/NewArticlePage";
import EditArticlePage from "../pages/EditArticlePage";

const AppRoutes = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "dashboard/new",
          element: <NewArticlePage />,
          
        },
        {
          path: "dashboard/edit/:id",
          element: <EditArticlePage />,
          
        },
        {
          path: "blogs/:id",
          element: <Blogs />,
        },
      ],
    },
    {
      path: "auth",
      element: <ProtectedAuth />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={allRoutes} />;
};

export default AppRoutes;
