import React from 'react';
import './Producto.css';

const Producto = ({ producto, agregarAlCarrito }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio} COP</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
    </div>
  );
};

export default Producto;
