import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Index'
import Error404 from './Pages/Error404'
import AuthLayout from './Layout/AuthLayout'
import DashboardLayout from './Layout/DashboardLayout'
import Dashboard from './Pages/Dashboard/Index'

function Routing() {
  return (
    <BrowserRouter>
    <Routes>
          {/* AUTH ROUTES */}

          <Route path="*" element={<Error404 />} />
                <Route path="/" element={<AuthLayout/>}>
                    <Route path="" element={<Login />} />
                </Route>

                {/* DASHBOARD */}
                <Route
                    path="/dashboard"
                    element={<Navigate replace to="/dashboard/home" />}
                />

                <Route path="/dashboard" element={<DashboardLayout />}>
                    {/* BASIC ROUTES */}

                    <Route path="home" element={<Dashboard />} />
                   </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Routing