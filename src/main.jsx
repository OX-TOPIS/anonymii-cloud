import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Channel from "./pages/chat/Channel.jsx";
import MyChannel from "./pages/MyChannel.jsx";
import Notifications from "./pages/Notifications.jsx"
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/mychannel",
        element: <MyChannel />,
      },
      {
        path: "/channel",
        element: <Channel />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.BrowserRouter>
    <RouterProvider router={router} />
  </React.BrowserRouter>
);
