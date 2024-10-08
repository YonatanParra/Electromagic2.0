import React from 'react';
import './Carrito.css';

const Carrito = ({ carrito, vaciarCarrito, eliminarProducto }) => {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <section id="carrito" className="carrito">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.nombre}>
            {item.nombre} x {item.cantidad} - ${item.precio * item.cantidad} COP
            <button onClick={() => eliminarProducto(item.nombre)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total} COP</h3>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </section>
  );
};

export default Carrito;
