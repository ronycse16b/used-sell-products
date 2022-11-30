import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Products from "../pages/AllProducts/Products";
import Blog from "../pages/Blog/Blog";
import BikeDetails from "../pages/Catagory/BikeDetails";
import Brands from "../pages/Catagory/Brands";
import Categories from "../pages/Catagory/Categories";
import AllBuyer from "../pages/dasboardcomponents/AllBuyer";
import AddProduct from "../pages/dasboardcomponents/Seller/AddProduct";
import Seller from "../pages/dasboardcomponents/Seller/Seller";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import MyOrder from "../pages/MyOrder/MyOrder";
import Login from "../pages/signupIn/Login";
import Signup from "../pages/signupIn/Signup";
import AdminRoute from "./Admin Route/AdminRoute";
import ProtectRoutes from "./ProtectRoutes";

export const router = createBrowserRouter([


  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,

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
        loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)
      },
      {
        path: '/brands/Details/:id',
        element: <ProtectRoutes><BikeDetails></BikeDetails></ProtectRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/brands/Details/${params.id}`)
      },
      {
        path: '/order',
        element: <ProtectRoutes><MyOrder></MyOrder></ProtectRoutes>
      },
      {
        path: '/category',
        element: <Categories></Categories>
      },
      {
        path: '/bikes',
        element: <Products></Products>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },



    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    errorElement:<ErrorPage></ErrorPage>,

    children: [

      {
        path: '/dashboard',
        element: <ProtectRoutes> <Dashboard></Dashboard></ProtectRoutes>
      },
      {
        path: '/dashboard/seller',
        element: <ProtectRoutes> <AdminRoute><Seller></Seller></AdminRoute></ProtectRoutes>
      },
      {
        path: '/dashboard/addproduct',
        element: <ProtectRoutes> <AddProduct></AddProduct></ProtectRoutes>
      },
      {
        path: '/dashboard/buyers',
        element: <ProtectRoutes><AdminRoute><AllBuyer></AllBuyer></AdminRoute></ProtectRoutes>
      },



    ]
  },


]) 