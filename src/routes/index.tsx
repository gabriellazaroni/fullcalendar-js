import { Routes, Route } from "react-router-dom"
import { CalendarPage } from "../pages/CalendarPage"
import { MainLayout } from "../layout/MainLayout/index.tsx"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CalendarPage />} />
      </Route>
    </Routes>
  )
}