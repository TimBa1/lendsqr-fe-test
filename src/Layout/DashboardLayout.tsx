import React from 'react'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
    <div>
        Navbar
    </div>
    <div>
        sidebar
    </div>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout