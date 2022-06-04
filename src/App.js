import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';



function App() {

  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=> {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    console.log(`lat is ${lat}, lon is ${lon}`);

    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat, lon])


  return (
    <div className="App">
      <h2>Weather App</h2>

      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
