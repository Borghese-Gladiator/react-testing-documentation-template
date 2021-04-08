import { render, screen } from '@testing-library/react';
import GameDialog from './GameDialog';

test('renders learn react link', () => {
  render(<GameDialog />);
  const linkElement = screen.getByText("INFO");
  expect(linkElement).toBeInTheDocument();
});
