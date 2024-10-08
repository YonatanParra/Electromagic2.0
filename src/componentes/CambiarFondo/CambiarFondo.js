import React from 'react';
import './CambiarFondo.css';

const CambiarFondo = ({ cambiarColor }) => {
  return (
    <div className="cambiar-fondo">
      <button onClick={cambiarColor}>Cambiar Fondo</button>
    </div>
  );
};

export default CambiarFondo;
