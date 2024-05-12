import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import routes from './Pages/routes.jsx'
import './App.css'
import { AppProvider } from './Pages/useContext.jsx'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
