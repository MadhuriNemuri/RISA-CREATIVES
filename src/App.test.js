import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Risa Creatives brand header and hero', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/RISA CREATIVES/i);
  expect(brandElements.length).toBeGreaterThan(0);
  expect(screen.getByText(/We build digital/i)).toBeInTheDocument();
});
