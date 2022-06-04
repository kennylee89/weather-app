import React from 'react';


const CardExampleCard = ({weatherData}) => (
    <div>
        <div className='header'> {weatherData.name} </div>
        <p>Temperature: {weatherData.main.temp}</p>
        <p>Description: {weatherData.weather[0].description}</p>
    </div>
)













export default CardExampleCard