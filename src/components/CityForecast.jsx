/*
CityForecast.jsx: Component to display the forecast for the selected city.
Receives the selected city and uses useEffect to fetch weather data and useRef to scroll the details
*/
import { useEffect, useState, useRef } from "react";
import { weatherData } from "../data/weatherData";

function CityForecast({ city }) {
  const [data, setData] = useState(null);
  const detailsRef = useRef(null);

  // useEffect
  useEffect(() => {
    setData(weatherData[city]);
  }, [city]);

  // useRef
  const scrollToDetails = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

if (!data) {
    return <p>No weather data available.</p>;
  }
  return (
    <div>
      <h2>{city}</h2>

      {data && (
        <>
          <p>{data.summary}</p>

          <button onClick={scrollToDetails}>View Details</button>

          <div ref={detailsRef}>
            <p>{data.details}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default CityForecast;

