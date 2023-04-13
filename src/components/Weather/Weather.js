import './Weather.css';
import { useEffect, useState } from "react";
import { getWeatherData } from "../../utils/api";

const Weather = ({ onGetCityImage }) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getWeatherData(city);
        setWeatherData(data);
        onGetCityImage(city);
    };

    return (
        <div>
            <h2>Inserisci il nome della città</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className='input-city' />
                <button type="submit" className='search-button'>Cerca</button>
            </form>
            {weatherData && (
                <div className="weather-info">
                    <h2 className="city-name">{weatherData.name}</h2>
                    <p className="temperature">Temperatura: {weatherData.main.temp}°C</p>
                    <p className="description">Descrizione: {weatherData.weather[0].description}</p>
                </div>
            )}

        </div>
    );
};

export default Weather;
