import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders the text i put in the screen', () => {
  render(<App />);

  it('does something', () => {
    const linkElement = screen.getByText(/incredible/i);
    expect(linkElement).toBeInTheDocument();
  })
  // add test simulating click and drag
  // todo curtis: figure out how to oranize this tests
  // todo: figure out how to render per function
});
