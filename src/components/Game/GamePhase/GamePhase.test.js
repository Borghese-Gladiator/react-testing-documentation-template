import { render, screen } from '@testing-library/react';
import GamePhase from './GamePhase';

test('renders learn react link', () => {
  render(<GamePhase />);
  const linkElement = screen.getByText("PHASE");
  expect(linkElement).toBeInTheDocument();
});
