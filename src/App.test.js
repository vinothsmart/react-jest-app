import {
  getByAltText,
  getByDisplayValue,
  getByLabelText,
  getByPlaceholderText,
  getByRole,
  getByTitle,
  render,
  screen,
} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryByText(/learn rect/i);
  expect(linkElement).not.toBeInTheDocument();
  const userName = screen.queryByTestId('user-name');
  expect(userName).not.toBeInTheDocument();
  expect(userName).toBeInTheDocument();
  // getByRole(userName, 'heading'); - this is used for heading
  // getByPlaceholderText(userName, 'VinothKanna'); - this is used for placeholder text
  // getByLabelText(userName, 'VinothKanna'); - this is used for label text
  // getByAltText(userName, 'VinothKanna'); - this is used for image alt text
  // getByDisplayValue(userName, 'VinothKanna'); // this is used for input value
  // getByTitle(userName, 'VinothKanna'); // this is used for title
});
