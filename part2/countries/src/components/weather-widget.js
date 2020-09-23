import React from "react";

export default ({
  weather: { temperature, wind_speed, wind_dir, weather_icons },
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
      <img src={weather_icons[0]} />
    </>
  );
};
