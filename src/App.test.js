import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays a start button when not started', () => {
  render(<App />);
  const startButton = screen.getByText(/Start Timer/i);
  expect(startButton).toBeInTheDocument();
});

test('clicking the start button starts the timer', () => {
  render(<App />);
  const startButton = screen.getByText(/Start Timer/i);
  fireEvent(
    startButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const timer = screen.getByTestId('timer');
  let timerNumber = Number(timer.nodeValue);
  expect(timerNumber).toBeGreaterThan(0);
});
