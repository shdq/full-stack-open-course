import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

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
      details = (
        <div>
          <h2>{filteredCountries[0].name}</h2>
          <p>capital: {filteredCountries[0].capital}</p>
          <p>population: {filteredCountries[0].population.toLocaleString()}</p>
          <p>
            <img
              style={{ boxShadow: "0 0 3px #000" }}
              width="100px"
              src={filteredCountries[0].flag}
              alt={`${filteredCountries[0].name} flag`}
            />
          </p>
        </div>
      );
    }
    if (filteredCountries.length <= 10) {
      filteredCountries = filteredCountries.map((country) => (
        <li key={country.numericCode}>{country.name} <button onClick={() => setQuery(country.name)}>Show</button></li>
      ));
    }
  }

  return (
    <>
      find countries <input onChange={handleChange} value={query} />
      <p>Total amount of countries: {data.length}</p>
      {query && filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        details ? details : <ul>{filteredCountries}</ul>
      )}
    </>
  );
}

export default App;
