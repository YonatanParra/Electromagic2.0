// src/componentes/CambiarFondo/CambiarFondo.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import CambiarFondo from './componentes/CambiarFondo/CambiarFondo';

test('renderiza el botón de cambiar fondo', () => {
  render(<CambiarFondo />);
  const boton = screen.getByText(/Cambiar Fondo/i);
  expect(boton).toBeInTheDocument();
});

test('llama a la función de cambiar fondo al hacer clic', () => {
  const cambiarColor = jest.fn();
  render(<CambiarFondo cambiarColor={cambiarColor} />);
  const boton = screen.getByText(/Cambiar Fondo/i);
  fireEvent.click(boton);
  expect(cambiarColor).toHaveBeenCalled();
});
