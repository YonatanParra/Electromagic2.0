// src/componentes/Footer/Footer.test.js
import { render, screen } from '@testing-library/react';
import Footer from './componentes/Footer/Footer';

test('renderiza el pie de página con el texto de derechos de autor', () => {
  render(<Footer />);
  const footerText = screen.getByText(/© 2024 Electromagic/i);
  expect(footerText).toBeInTheDocument();
});
