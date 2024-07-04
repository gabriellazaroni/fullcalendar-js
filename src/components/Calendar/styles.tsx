import styled from 'styled-components'

export const CalendarContainer = styled.div`
  .fc, .fc *, .fc ::after, .fc ::before {
    border: none;
    box-sizing: border-box;
    text-align: right;
  }

  .fc-col-header {
    margin-top: 30px;
  }

  .fc .fc-scrollgrid-section-liquid > td {
    height: 600px;
}

  .fc-theme-standard td {
    border-top: 2px solid #E9F4F7;
  }

  .fc-theme-standard td {
  }

  .fc-toolbar-chunk {
    display: flex;
  }

  .fc-day-disabled {
    background-color: var(--white);
  }

  .fc-daygrid-day-number {
    color: #3E5682;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.6px;
    margin-top: 16px;
  }

  .fc-col-header-cell-cushion {
    color:  #212D45;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    letter-spacing: 0.08px;
  }

  .fc .fc-daygrid-day-frame {
    height: 10px;
  }

  .fc .fc-daygrid-day.fc-day-today {
    background-color: #fff;
  }

  .fc-h-event .fc-event-title-container {
    background: #F3FAFB;
  }

  .fc .fc-button:not(:disabled):not(.fc-prev-button):not(.fc-next-button) {
    cursor: pointer;
    height: 32px;
    width: 120px;
    text-align: center;
    background-color: var(--black);
    color: #fff;
  }

  .fc-button:not(:disabled):not(.fc-prev-button):not(.fc-next-button):not(.fc-timeGridWeek-button) {
    cursor: pointer; 
    background-color: var(--black);
    color: #fff;
  }

  .fc-button:not(:disabled):not(.fc-timeGridWeek-button):not(.fc-timeGridWeek-button) {
    cursor: pointer; 
    background-color: var(--white);
    color: #2F4264;
  }

  .fc-toolbar-title {
    color: #2F4264;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22.4px;
    margin-top: 7px;
  }

  .fc-h-event .fc-event-main {
    color:  #3456DA;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color: var(--white);
  }

  .fc-event.black-title .fc-event-main {
    color: #2F4264;
  }

  .fc-event.blue-title .fc-event-main {
    color: #3456DA;
  }

  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    margin-top: 15px;
  }

    .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
    color: #FF0000;
    font-weight: 600;
  }
`;