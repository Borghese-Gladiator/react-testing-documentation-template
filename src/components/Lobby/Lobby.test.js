import { render, screen } from '@testing-library/react';
import Lobby from './Lobby';

test('renders learn react link', () => {
  render(<Lobby />);
  const linkElement = screen.getByText("Copy");
  expect(linkElement).toBeInTheDocument();
});
