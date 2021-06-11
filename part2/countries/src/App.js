import React, { useState, useEffect } from "react";

import WeatherWidget from "./components/weather-widget";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchWeather = async (city) => {
      const api_key = process.env.REACT_APP_API_KEY;
      if (city === "") return;
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      );
      const result = await response.json();
      setWeather(result);
    };

    fetchWeather(city);
  }, [city]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let filteredCountries;
  let details;

  if (query) {
    filteredCountries = data.filter(
      (country) => country.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
    if (filteredCountries.length === 1) {
      const { name, capital, population, flag } = filteredCountries[0];
      if (city !== capital) setCity(capital);
      details = (
        <div>
          <h2>{name}</h2>
          <p>capital: {capital}</p>
          <p>population: {population.toLocaleString()}</p>
          <p>
            <img
              style={{ boxShadow: "0 0 3px #000" }}
              width="100px"
              src={flag}
              alt={`${name} flag`}
            />
          </p>
          <h2>Weather in {capital}</h2>
          <div>
            {weather.error ? (
              `Error while loading weather: ${weather.error.info}`
            ) : (
              weather && <WeatherWidget weather={weather} />
            )}
          </div>
        </div>
      );
    }
    if (filteredCountries.length <= 10) {
      filteredCountries = filteredCountries.map((country) => (
        <li key={country.numericCode}>
          {country.name}{" "}
          <button
            onClick={() => {
              setQuery(country.name);
              setCity(country.capital);
            }}
          >
            Show
          </button>
        </li>
      ));
    }
  }
  
  return (
    <>
      find countries <input onChange={handleChange} value={query} />
      <p>Total amount of countries: {data.length}</p>
      {query && filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : details ? (
        details
      ) : (
        <ul>{filteredCountries}</ul>
      )}
    </>
  );
}

export default App;
