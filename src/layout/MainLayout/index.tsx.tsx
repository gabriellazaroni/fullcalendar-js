import { Outlet } from 'react-router-dom'
import { MainContainer } from './styles'
import { Header } from '../../components/Header'

export function MainLayout() {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  )
}