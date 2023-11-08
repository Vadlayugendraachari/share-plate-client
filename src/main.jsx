import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Login from './components/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Registration from './components/Registration/Registration.jsx';
import Home from './components/Home/Home.jsx';
import AvailableFoods from './components/AvailableFood/AvailableFoods.jsx';
import FoodDetails from './components/FoodDetails/FoodDetails.jsx';
import PrivateRoutes from './Private/PrivateRoutes.jsx';
import AddFood from './components/AddFood/AddFood.jsx';
import ManageFood from './components/ManageFoods/ManageFoods.jsx';
import ManageSingleFoodRequest from './components/ManageFoods/ManageSingleFoodRequest.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/avialabe',
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path:'/add',
        element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>,
      },
      {
        path:'/manage',
        element: <PrivateRoutes><ManageFood></ManageFood></PrivateRoutes>,
      },
      {
        path:'/managesingle/:id',
        element: <PrivateRoutes><ManageSingleFoodRequest></ManageSingleFoodRequest></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:2003/requestedfood/${params.id}`)
      },
      {
        path:'/foods/details/:id',
        element: <PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:2003/foods/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/reg',
        element: <Registration></Registration>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
