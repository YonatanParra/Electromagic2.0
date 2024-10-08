import React from 'react';
import Producto from '../Producto/Producto';
import './Productos.css';

// Importar imágenes
import auricularImage from '../../images/Auricular.jpg';
import mouseImage from '../../images/mouse.jpg';
import tecladoImage from '../../images/tecladogamer.png';

const Productos = ({ agregarAlCarrito }) => {
  const listaProductos = [
    {
      nombre: 'Teclado',
      precio: 100000,
      imagen: tecladoImage,
    },
    {
      nombre: 'Mouse',
      precio: 50000,
      imagen: mouseImage,
    },
    {
      nombre: 'Auricular',
      precio: 80000,
      imagen: auricularImage,
    },
  ];

  return (
    <section id="productos" className="productos">
      <h2>Productos</h2>
      <div className="lista-productos">
        {listaProductos.map((producto) => (
          <Producto key={producto.nombre} producto={producto} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </section>
  );
};

export default Productos;
