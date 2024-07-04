import { HeaderContainer, IconImg, Title } from "./styles";
import calendarIcon from '../../assets/calendar-days-svgrepo-com.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Title>Fullcalendar JS</Title>
      <IconImg src={calendarIcon} />
    </HeaderContainer>
  )
}