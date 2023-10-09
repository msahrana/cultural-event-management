import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import ErrorPage from './Error/ErrorPage';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import History from './Pages/History';
import AuthProvider from './Provider/AuthProvider';
import Card from './Components/Card/Card';
import PrivateRoute from './Components/Private/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`/events.json`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:
        '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/history',
        element: <History></History>,
        loader: () => fetch(`/events.json`)
      },
      {
        path: '/card/:id',
        element: <PrivateRoute><Card></Card></PrivateRoute>,
        loader: (object) => fetch(`/events.json/${object.params.id}`)
      }
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
