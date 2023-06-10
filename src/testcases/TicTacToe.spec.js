import { render, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

test('should load TicTacToe', () => {
  render(<TicTacToe />);
});
