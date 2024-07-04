import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CalendarPage } from '../../pages/CalendarPage';

jest.mock("../../services/api", () => ({
  apiData: {
    get: jest.fn()
  }
}));

jest.mock('../../components/Calendar', () => {
  return {
    __esModule: true,
    Calendar: () => <div>Mocked Calendar</div>
  };
});

describe('CalendarPage Component', () => {
  it('should display "Segunda-feira" in the document', () => {
    render(<CalendarPage />);
    const dayOfWeek = screen.getByText('Segunda-feira');
    expect(dayOfWeek).toBeInTheDocument();
  });
});

describe('CalendarPage Component 2', () => {
  it('should display "Janeiro, 2024" in the document', () => {
    render(<CalendarPage />);
    const dayOfWeek = screen.getByText('Janeiro, 2024');
    expect(dayOfWeek).toBeInTheDocument();
  });
});

describe('CalendarPage Component 3', () => {
  it('should display "Hoje" in the document', () => {
    render(<CalendarPage />);
    const dayOfWeek = screen.getByText('Hoje');
    expect(dayOfWeek).toBeInTheDocument();
  });
});

describe('CalendarPage 2', () => {
  it('deve exibir "Aprovação de Saques" no documento', () => {
    render(<CalendarPage />);
    const authTexts = screen.getAllByText('Aprovação de Saques');
    expect(authTexts.length).toBeGreaterThan(0);
  });
});