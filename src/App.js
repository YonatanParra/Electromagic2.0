import React, { useState } from 'react';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Productos from './componentes/Productos/Productos';
import Carrito from './componentes/Carrito/Carrito';
import CambiarFondo from './componentes/CambiarFondo/CambiarFondo';
import Clima from './componentes/Clima/Clima';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [fondo, setFondo] = useState('#f0f4f8');

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.nombre === producto.nombre);
    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.nombre === producto.nombre ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarProducto = (nombre) => {
    setCarrito(carrito.filter((item) => item.nombre !== nombre));
  };

  const cambiarColor = () => {
    setFondo(fondo === '#f0f4f8' ? '#b0e0e6' : '#f0f4f8');
  };

  return (
    <div style={{ backgroundColor: fondo }}>
      <Header />
      <CambiarFondo cambiarColor={cambiarColor} />
      <Productos agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} eliminarProducto={eliminarProducto} />
      <Clima />
      <Footer />
    </div>
  );
}

export default App;
