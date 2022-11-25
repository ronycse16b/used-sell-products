import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import MyOrder from "../pages/MyOrder/MyOrder";
import Login from "../pages/signupIn/Login";

export const router = createBrowserRouter([

    {
      path: '/',
      element:<Main></Main>,

      children: [
           
        {
         path: '/',
         element:<Home></Home>
        },
        {
         path: '/home',
         element:<Home></Home>
        },
        {
         path: '/blog',
         element:<Login></Login>
        },
        {
         path: '/order',
         element:<MyOrder></MyOrder>
        },
        {
         path: '/login',
         element:<Login></Login>
        },


     ]
    },


]) 