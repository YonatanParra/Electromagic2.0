// src/componentes/Header/Header.test.js
import { render, screen } from '@testing-library/react';
import Header from './componentes/Header/Header';

test('renderiza el título Electromagic', () => {
  render(<Header />);
  const titulo = screen.getByText(/ELECTROMAGIC/i);
  expect(titulo).toBeInTheDocument();
});

test('renderiza los enlaces de navegación', () => {
  render(<Header />);
  const productosLink = screen.getByText(/Productos/i);
  const carritoLink = screen.getByText(/Carrito/i);
  expect(productosLink).toBeInTheDocument();
  expect(carritoLink).toBeInTheDocument();
});
