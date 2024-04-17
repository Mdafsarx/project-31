import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Page/Home/Home";
import Profile from "../Page/Profile/Profile";
import Contract from "../Page/Contract/Contract";
import Login from "../Page/Auth/Log/Login";
import Register from "../Page/Auth/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/Profile',
            element:<PrivateRoute><Profile/></PrivateRoute>,
        },
        {
            path:'/Contract-us',
            element:<PrivateRoute><Contract/></PrivateRoute>
        },
        {
            path:'/Login',
            element:<Login/>
        },
        {
          path:'/Register',
          element:<Register/>
        }
      ]
    },
  ]);

export default router ;