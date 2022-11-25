import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import BikeDetails from "../pages/Catagory/BikeDetails";
import Brands from "../pages/Catagory/Brands";
import Categories from "../pages/Catagory/Categories";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import MyOrder from "../pages/MyOrder/MyOrder";
import Login from "../pages/signupIn/Login";

export const router = createBrowserRouter([
  

  {
    path: '/',
    element: <Main></Main>,

    children: [

      {
        path: '/',
        element: <Home></Home>,
      

      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/brands/:id',
        element: <Brands></Brands>,
        loader:({params})=> fetch(`http://localhost:5000/brands/${params.id}`)
      },
      {
        path: '/brands/Details/:id',
        element: <BikeDetails></BikeDetails>,
        loader:({params})=> fetch(`http://localhost:5000/brands/Details/${params.id}`)
      },
      {
        path: '/order',
        element: <MyOrder></MyOrder>
      },
      {
        path: '/category',
        element: <Categories></Categories>
      },


    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,

    children: [

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },



    ]
  },


]) 