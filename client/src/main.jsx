import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';


import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: '/signup',
    element: <Signup/>,
    // errorElement: <NotFoundPage />,
  },
  {
    path: '/signin',
    element: <Signin/>,
    // errorElement: <NotFoundPage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);