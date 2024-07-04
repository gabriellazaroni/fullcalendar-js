import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptbr from '@fullcalendar/core/locales/pt-br'
import { CalendarContainer } from './styles'
import {
  endOfWeek,
  isWithinInterval,
  startOfWeek
} from 'date-fns'

const customContentSource = (arg: any) => {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  return weekDays[arg.date.getUTCDay()];
};

interface EventProps {
  eventsData?: {}
}

export function Calendar({
  eventsData
}: EventProps
) {

  const handleDayCellDidMount = (arg: any) => {
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
    const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 0 });
    if (isWithinInterval(arg.date, { start: startOfCurrentWeek, end: endOfCurrentWeek })) {
      arg.el.classList.add('current-week');
    }
  };

  return (
    <CalendarContainer>
      <FullCalendar
        height={'700px'}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          start: 'timeGridWeek dayGridMonth',
          end: 'prev title next',
        }}
        locale={ptbr}
        dayHeaderContent={customContentSource}
        events={eventsData}
        dayCellDidMount={handleDayCellDidMount}
      />
    </CalendarContainer>
  )
}