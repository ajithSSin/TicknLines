import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import AboutUsPage from './pages/AboutUs'
import ServicePage from './pages/Services'
import ContactPage from './pages/Contact'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutUsPage />
  },
  {
    path:'/service',
    element:<ServicePage/>
  },
  {
    path:'/contact',
    element:<ContactPage/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App