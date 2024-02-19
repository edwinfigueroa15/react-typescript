
import { render, screen } from '@testing-library/react';
import PublicLayout from './PublicLayout';

test('renders learn react link', () => {
  render(<PublicLayout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
