// src/componentes/Carrito/Carrito.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Carrito from './componentes/Carrito/Carrito';

test('renderiza el título del carrito', () => {
  render(<Carrito carrito={[]} />);
  const tituloCarrito = screen.getByText(/Carrito de Compras/i);
  expect(tituloCarrito).toBeInTheDocument();
});

test('renderiza productos en el carrito', () => {
  const carrito = [{ nombre: 'Teclado', precio: 100000, cantidad: 1 }];
  render(<Carrito carrito={carrito} />);
  const productoCarrito = screen.getByText(/Teclado x 1 - \$100000 COP/i);
  expect(productoCarrito).toBeInTheDocument();
});

test('el botón de vaciar carrito funciona correctamente', () => {
  const vaciarCarrito = jest.fn();
  const carrito = [{ nombre: 'Teclado', precio: 100000, cantidad: 1 }];
  render(<Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />);
  const botonVaciar = screen.getByText(/Vaciar Carrito/i);
  fireEvent.click(botonVaciar);
  expect(vaciarCarrito).toHaveBeenCalled();
});
