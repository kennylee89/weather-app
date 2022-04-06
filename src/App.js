import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";

function App() {

  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    console.log(`lat is ${lat}, lon is ${lon}`);
  })


  return (
    <div className="App">
      <p>Weather App</p>
    </div>
  );
}

export default App;
