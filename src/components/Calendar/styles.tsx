import styled from 'styled-components'

export const CalendarContainer = styled.div`
  .fc, .fc *, .fc ::after, .fc ::before {
    border: none;
    box-sizing: border-box;
    text-align: right;
  }

  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 43px;
  }

  .fc-col-header {
    margin-top: 25px;
    margin-bottom: 24px;
  }

  .fc-scroller-harness {
    border-top: 2px solid #cbc3e1;
  }

  .fc .fc-scrollgrid-section-sticky > * {
    background: #5b5175;
    position: sticky;
    z-index: 3;
  }


  .fc .fc-scrollgrid-section-liquid > td {
    height: 0px;
  }

  .fc .fc-scrollgrid-section-liquid > td {
   border-top: transparent; 
  }

  .fc-scroller {}


  .fc-theme-standard tr {
    border-top: 2px solid #cbc3e1; 
  }

  .fc-theme-standard tr:last-child {
    border-top: 2px solid transparent; 
  }

  .fc-timegrid-divider {
    display: none;
  }

  .fc-toolbar-chunk {
    display: flex;
  }

  .fc-day-disabled {
    background-color: #fff;
  }

  .fc-daygrid-day-number {
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.6px;
    margin-top: 16px;
  }

  .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
    color: #000;
    font-weight: 600;
  }

  .fc-col-header-cell-cushion {
    color:  #0f0d13;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    letter-spacing: 0.08px;
  }

  .fc .fc-daygrid-day-frame {
    height: 100px;
  }

  .fc .fc-daygrid-day.fc-day-today {
    background-color: #4c4362;
  }

  .fc-h-event .fc-event-title-container {
    background: var(--blue-50);
    padding: 8px 0 8px 0;
  }

  .fc-event.green-title .fc-event-main {
    color: #d6fc81 !important; 
  }

.fc-event.red-title .fc-event-main {
    color: #ff7066 !important; 
  }


  .fc .fc-button:not(:disabled):not(.fc-prev-button):not(.fc-next-button) {
    display: none;
  }

  .fc-toolbar-title {
    color: #fff;
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
    background-color: #4c4362;
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

  .current-week .fc-daygrid-day-top {
    background-color: #4c4362;
    opacity: 100;
  }

  .current-week .fc-daygrid-day-number {
    color: #000;
  }
  
  .fc-day-sun .fc-event-title-container {
    position: relative;
  }

  .fc .fc-day-sun .fc-event-title-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background-color: var(--blue-200);
    border-radius: 1.5px;
  }
  `;
