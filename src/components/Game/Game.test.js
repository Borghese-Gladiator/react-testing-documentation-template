import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders learn react link', () => {
  render(<Game />);
  const linkElement = screen.getByText("Sample Text for Test");
  expect(linkElement).toBeInTheDocument();
});
