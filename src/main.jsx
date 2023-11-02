import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import EmployeStatus from './Pages/EmployeStatus/EmployeStatus.jsx'

//set router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "employeStatus",
        element: <EmployeStatus></EmployeStatus>
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },

    ]
  },
  {
    path:'/home',
    element: <Home></Home>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
