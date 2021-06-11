import React from "react";

export default ({
  weather: {
    current: { temperature, wind_speed, wind_dir, weather_icons },
  },
}) => {
  return (
    <>
      <p>
        <strong>Temperature:</strong> {temperature} Celsius
      </p>
      <p>
        <strong>Wind:</strong>
        {wind_speed} mph, direction: {wind_dir}
      </p>
      {weather_icons && <img src={weather_icons[0]} alt="weather icon" />}
    </>
  );
};
