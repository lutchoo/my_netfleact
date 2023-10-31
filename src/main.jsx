import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Show } from './pages/Show.jsx';


const routers = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
  {
    path: "/about",
    element: <h1>hello word</h1>
  },
  {
    path:"/show/:id",
    element: <Show/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
