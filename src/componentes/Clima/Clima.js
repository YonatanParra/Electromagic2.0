import React, { useState } from 'react';
import './Clima.css';

const Clima = () => {
  const [clima, setClima] = useState(null);

  const obtenerClima = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&lang=es&APPID=60f1fbfbec506f7b76cad96a1045d54a`
    )
      .then((response) => response.json())
      .then((data) => setClima(data))
      .catch((error) => {
        console.error('Error al obtener el clima:', error);
      });
  };

  return (
    <div className="clima">
      <button onClick={obtenerClima}>Obtener Clima en Londres</button>
      {clima && (
        <div>
          <h3>Clima en {clima.name}:</h3>
          <p>Temperatura: {clima.main.temp}°C</p>
          <p>Descripción: {clima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Clima;
