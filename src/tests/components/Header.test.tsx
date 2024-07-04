import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from '../../components/Header';

describe('Header', () => {
  it('renders logo and menu items correctly', () => {
    render(<Header />);

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();

    expect(screen.getByText('Eventos')).toBeInTheDocument();
    expect(screen.getByText('Relatórios')).toBeInTheDocument();
    expect(screen.getByText('Financeiro')).toBeInTheDocument();
    expect(screen.getByText('Canais de Venda')).toBeInTheDocument();
  });

  it('renders date update and avatar icons correctly', () => {
    render(<Header />);
    expect(screen.getByAltText('Reload Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Avatar Icon')).toBeInTheDocument();
  });

});