// src/componentes/Producto/Producto.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Producto from './componentes/Producto/Producto';

test('renderiza el nombre del producto', () => {
  render(<Producto nombre="Teclado" precio={100000} imagen="teclado.png" />);
  const nombreProducto = screen.getByText(/Teclado/i);
  expect(nombreProducto).toBeInTheDocument();
});

test('renderiza el botón Agregar al Carrito', () => {
  const agregarAlCarrito = jest.fn();
  render(<Producto nombre="Teclado" precio={100000} imagen="teclado.png" agregarAlCarrito={agregarAlCarrito} />);
  const boton = screen.getByText(/Agregar al Carrito/i);
  expect(boton).toBeInTheDocument();
  fireEvent.click(boton);
  expect(agregarAlCarrito).toHaveBeenCalled();
});
