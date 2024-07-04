import { z } from "zod";
import { Calendar } from "../../components/Calendar";
import { Header } from "../../components/Header";
import {
  CalendarContainer,
  CalendarContainerTeste,
  Container,
  MainContainer,

} from "./styles";
import { useEffect, useState } from "react";
import { apiData } from "../../services/api";

const EventSchema = z.object({
  title: z.string(),
  start: z.string(),
  id: z.string()
});

type Event = {
  title: string;
  start: string;
  id: string;
};

const EventsSchema = z.array(EventSchema);

export function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const Events = async () => {
      try {
        const response = await apiData.get('/values');
        const validatedEvents = EventsSchema.parse(response.data);
        const updatedEvents = validatedEvents.map(event => ({
          ...event,
          className: event.title === 'R$ 0,00' ? 'black-title' : 'blue-title',
        }));
        setEvents(updatedEvents);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };
    Events();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <CalendarContainer>
            <CalendarContainerTeste>
              <Calendar
                eventsData={events}
              />
            </CalendarContainerTeste>
          </CalendarContainer>
        </MainContainer>
      </Container>
    </>
  )
}