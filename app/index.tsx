import * as React from "react"
import { Routes, Route, Link } from "react-router-dom"
import DashboardLayout from "./DashboardLayout"
import Home from "./Home"


const Dashboard = React.memo(()=> {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DashboardLayout>
  )
})

export default Dashboard
