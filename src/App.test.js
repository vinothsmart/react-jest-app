import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryByText(/learn rect/i);
  expect(linkElement).not.toBeInTheDocument();
  const userName = screen.queryByTestId('user-name');
  expect(userName).not.toBeInTheDocument();
});
