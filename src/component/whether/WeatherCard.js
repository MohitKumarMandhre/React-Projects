import React, { useState, useEffect } from 'react';

const WeatherCard = ({tempInfo}) => {
    const [weatherIcon, setWeatherIcon] = useState("");
    const { 
        temp, humidity, pressure, weatherMood, name, speed, country, sunset
    } = tempInfo;
    const date = new Date(sunset *1000);
    const setTime = `${date.getHours()}:${date.getMinutes()}`;

    useEffect(() => {
        if(weatherMood){
            switch (weatherMood) {
                case "Clouds":
                    setWeatherIcon('wi-day-cloudy');
                    break;
                case "Clear":
                    setWeatherIcon('wi-day-sunny');
                    break;
                case "Haze":
                    setWeatherIcon('wi-fog');
                    break;
                case "Rain":
                    setWeatherIcon('wi-day-rain');
                    break;
                case "Mist":
                    setWeatherIcon('wi-dust');
                    break;
                default:
                    setWeatherIcon('wi-day-sunny');
                    break;
            }
        }
    }, [weatherMood]);

    return (
        <>
            <article className="widget" >
                <div className="weatherIcon">
                    <i className={`wi ${weatherIcon}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                <div className="description">
                    <div className="weatherCondition">{weatherMood}</div>
                    <div className='place'>{name}, {country}</div>
                </div>
                </div>
                <div className="date">{ new Date().toLocaleString() }</div>
                {/* our 4-column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-sunset"></i>
                            </p>
                            <p className="extra-info-leftside">
                            {setTime} PM<br/>
                            Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-humidity"></i>
                            </p>
                            <p className="extra-info-leftside">
                            {humidity}<br/>
                            Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                    <div className="two-sided-section">
                            <p>
                                <i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                            {pressure}<br/>
                            Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-strong-wind"></i>
                            </p>
                            <p className="extra-info-leftside">
                            {speed}<br/>
                            Wind
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard;
