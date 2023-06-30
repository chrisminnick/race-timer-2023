import { render, screen, fireEvent } from '@testing-library/react';
import Timer from './Timer';

test('starts at an initial value passed to it', () => {
  render(<Timer duration={30} />);
  const timer = screen.getByTestId('timer');
  let timerNumber = Number(timer.nodeValue);
  expect(timerNumber).toBeEqualTo('30');
});
