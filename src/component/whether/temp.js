// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=619605eeeaa2ec875bdf39b30e27be5d

import React, { useState, useEffect } from 'react';
import './style.css';
import WeatherCard from './WeatherCard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("durg");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async() => {
        try {
            // place ur api key from https://openweathermap.org/
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=61960540eeeaa2ec875bdf39b30e27be5dXNXX`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            }
            console.log(myNewInfo);
            setTempInfo(myNewInfo);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    }, [])
    return ( <
        >
        <
        div className = "wrap" >
        <
        div className = "search" >
        <
        input type = "search"
        placeholder = "Type your city name here."
        id = "search"
        className = "searchTerm"
        value = { searchValue }
        onChange = {
            (e) => { setSearchValue(e.target.value) }
        }
        /> <
        button className = "searchButton"
        onClick = { getWeatherInfo } > Search < /button> < /
        div > <
        /div> { / * your card goes here * / } <
        WeatherCard tempInfo = { tempInfo }
        /> < / >
    )
}

export default Temp;