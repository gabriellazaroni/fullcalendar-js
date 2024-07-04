import { Routes, Route } from "react-router-dom"
import { CalendarPage } from "../pages/CalendarPage"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<CalendarPage />} />
    </Routes>
  )
}