import { render, screen } from '@testing-library/react';
import App from './App';

test('displays a start button when not started', () => {
  render(<App />);
  const startButton = screen.getByText(/Start Timer/i);
  expect(startButton).toBeInTheDocument();
});
